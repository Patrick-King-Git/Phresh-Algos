// const {NumberToDiffBase, NumtoBaseLetters} = require('./n-base');
module.exports = {
  DecToHexaDecimal,
  NumtoHexaLetters,
  HexaDecimaltoNum,
  HexaLetterstoNum,
  BinToHexa
}
function DecToHexaDecimal (num) {
  let ans = "0x";
  let newnum = 0;
  let hexa = "";
  let count = 0;
  //divide down to get the leftmost hexidecimal
  while(num>=16) {
    num/=16;
    //track the number of divisions to be used later
    count+=1;
  }

    for(let i = 0; i <=count; i++) {
      //floor the remainder to get the proper int between 0 and 15
      newnum = Math.floor(num);
      //Helper function -- map number to correct hexadecimal
      hexa = NumtoHexaLetters(newnum);
      //concatenate the number or string onto the current string
      ans = ans + hexa;
      //take the remainder and mulitply be 16
      num-=newnum;
      num*=16;
    }
  return ans;
}
//*************************************************************************** */

//helper function taking in num and returning the hexadecimal
function NumtoHexaLetters (num) {
  let hexa = "";
  switch(num){
    case 10:
    hexa = "A";
    break;
    case 11:
    hexa = "B";
    break;
    case 12:
    hexa = "C";
    break;
    case 13:
    hexa = "D";
    break;
    case 14:
    hexa = "E";
    break;
    case 15:
    hexa = "F";
    break;
    default:
    hexa=num;      
  }
  return hexa;
}
//*************************************************************************** */

//helper function taking in a character and returning the number equivalent
function HexaLetterstoNum (letter) {
  let num = 0;
  let i=0;
  //each index mapped to the integer value
  let alphabet = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
  while (i < alphabet.length){
    if (letter == alphabet[i]){
      num = i;
      break;
    }
    i++
  }
  return num;
}
//*************************************************************************** */


function HexaDecimaltoNum (str) {
  let ans = 0;
  let count = 0;
  let amount=0;
  //isolate the last character
  let lastChar = str.substr(str.length -1);
  //work backward through the hexadecimal string until you hit x (eg 0x5FC401)
  while (lastChar != "x"){
    //amount to be added changed from hex to number
    amount = HexaLetterstoNum(lastChar);
    //each amount is a power of 16 depending on its position
    amount= amount * (16**count); 
    //progressive total 
    ans+=amount; 
    //chop off the last letter
    str = str.substring(0, str.length - 1);
    //reset the last letter
    lastChar = str.substr(str.length -1);
    count++;
  }
  return ans;
}
//*************************************************************************** */

function BinToHexa(bin) {
  let sum = 0,
  hexa = "0x",
  count = 0,
  i=bin.length - 1,
  //helper array that acts as a stack LIFO
  array = [];
  //work backwards through binary num until b (eg 0b0111011001)
  //each set of 4 numbers beginning from the back will compromise a one hexadecimal
  while (bin[i] != "b"){
    //if set of 4, reset the counter, push the hexadecimal into the array for later, reset the sum,
    if(count ==4) {
      count = 0;
      array.push(NumtoHexaLetters(sum));
      sum=0;
      //do not increment 
      i++;
    }
    else if(bin[i] == 1){
      //if a 1, add to the current stuff using a counter for position and value
      sum += 2**count;
      count++;
    }
    else{
      //if 0 just increment the counter
      count++
    }
    i--;
  }
  //catchall if the last set of 4 isn't full
  if (count!=0) {
    array.push(NumtoHexaLetters(sum));
  }
  //concatenate each element of the stack back in the right order
  for (let j = array.length-1;j>=0; j--) {
    hexa += array[j];
  }
  return hexa;
}
//*************************************************************************** */
