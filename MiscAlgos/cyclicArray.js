module.exports = {
    cyclicArray
  }
//FIND CYCLE IN ARRAY
//Assumptions ------>
// 1) Start at the 0 index
// 2) The value of arr[i] is set as the next index (i) to go to
//     eg [1,4,6,5,3,4] begin at index 0 --> arr[0] = 1 now go to index 1 --> arr[1] = 4 now go to index 4 --> arr[4] = 3 now go to index 3 --> arr[3] = 5 now go to index 5 --> arr[5] = 4 now go to index 4 --> This is a cyclic array (infinitely repeating)
// 3) One number must be greater than or equal to array.length (otherwise will always infinitely repeat)
//GOAL : check if infinite loop or not


function cyclicArray(arr){
    let i=0, 
    count =0;
    //create checks to see if arr[0] or i itself are out of bounds of the array, if so exit the loop
    while((i >=0 && arr[i]>=0) || (i <arr.length && arr[i] <arr.length)) {
        //if the count is greater than arr.length-1 that means one element is visited twice therefore there is a cycle
        if(count>= arr.length) {
            console.log("there is a cycle in the array");
            return true;
        }
        //
        else{
            //increment counter and traverse to next index from current index value
            count++;
            i = arr[i];
        }
    }
    console.log("no cycle in array");
    return false;
}



// find a cycle in an array using two runners; 1 runs at 2x speed of the otherq
function isCycle(arr){
    let runner1 = arr[0],
        // initialize runner2 staggered ahead in order to later return true whenever arr[runner1] == arr[runner2]
        runner2 = arr[runner1];
    // making sure arr[runner2] is not undefined
    if(arr[runner2] == undefined) return false;
    while(true){
        // return false if value at runner 2 is out of bounds
        if(arr[runner2] >= arr.length || arr[runner2] < 0) return false;
        // return true if values at runner1 and runner2 are equal 
            // (because runner2 moves through twice as fast as runner1, this means runner2 has hit a loop)
        if(arr[runner1] === arr[runner2]) return true;
        // increment runner1
        runner1 = arr[runner1];
        // increment runner2
        runner2 = arr[runner2];
        // return false if value at runner 2 is out of bounds after 1 incrementation 
        if(arr[runner2] >= arr.length || arr[runner2] < 0) return false;
        // return true if values at runner1 and runner2 are equal (means runner2 has already looped through)
            // checking this twice optimizes in case there's an odd number of values (if runner2 skips over runner1)
        if(arr[runner1] === arr[runner2]) return true;
        // increment runner2 a second time
        runner2 = arr[runner2];
    }
}


var array1 = [1,4,7,4,6,3]; //not a loop
var array2 = [-1,4,7,4,6,3]; // not a loop
var array3 = [18,4,7,4,6,3,8]; //not a loop
var array4 = [3,4,1,4,2,3]; //is a loop
var array5 = [1,4,8,2,3,3,5,0,7]; //is a loop
var array5 = [0]; //is a loop

console.log(cyclicArray(array1));
console.log('*************************');
console.log(cyclicArray(array2));
console.log('*************************');
console.log(cyclicArray(array3));
console.log('*************************');
console.log(cyclicArray(array4));
console.log('*************************');
console.log(cyclicArray(array5));



