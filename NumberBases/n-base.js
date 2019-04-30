
module.exports = {
    NumberToDiffBase,
    NumtoBaseLetters
}

//fun write for a new base system up to 36 in the form 0xAZ72H33
function NumberToDiffBase (num, base) {
    let ans = "0x";
    let newnum = 0;
    let key = "";
    let count = 0;
    //divide down to get the leftmost letter
    while(num>=base) {
      num/=base;
      //track the number of divisions to be used later
      count+=1;
    }
  
      for(let i = 0; i <=count; i++) {
        //floor the remainder to get the proper int between 0 and base
        newnum = Math.floor(num);
        //Helper function -- map number to correct hexadecimal
        key = NumtoBaseLetters(newnum);
        //concatenate the number or string onto the current string
        ans = ans + key;
        //take the remainder and mulitply be 16
        num-=newnum;
        num*=base;
      }
    return ans;
  }
  //*************************************************************************** */
  
  //helper function taking in num and returning the number with the new base
  function NumtoBaseLetters (num) {
    let key = "";
    let lib = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    key = lib[num]
    return key;
  }

