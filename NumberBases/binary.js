module.exports = {
    NumtoBinary,
    BinarytoNum
  }

function NumtoBinary(num) {
    let bin = "0b";
    //storing bin numbers for later stack like
    let storage = [];
    while (num >0) {
        //find its remainder and store it
        rem = num % 2;
        storage.push(rem);
        //reset num to itself/2 rounding down
        num = Math.floor(num/2);
    }
    while (storage.length >0){
        //loop back through to concatenate the proper binary
        bin += storage.pop();
    }
    return bin;
}

//*************************************************************************** */

function BinarytoNum(bin) {
    let num = 0,
        power = 0,
        //begin at last character
        i = bin.length-1;
        //loop through where each digit to the left is 2 to the power of n+1
    while (bin[i] != 'b') {
        if (bin[i] == 1){
            //if digit is a 1 add 2 to the power to the curent sum
            num += 2**power;
            console.log(num);
        }
        //as you go left increment power
        power++;
        //go left
        i--;
    }
    return num;
}
