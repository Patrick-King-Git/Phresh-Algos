/* Common Array Methods*/

//test cases

let array1 = [4,7,13,2,-1],
    array2 = [-4,7,-13,-2,-1, -80],
    array3 = [3],
    array4 = [],
    element1 = 5,
    index1 = 1,
    index2 = 3;

//end test cases

function Swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1]= arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function Insert(arr, element, idx) {
    //check for if insertion is possible
    if( idx > arr.length) {
        console.log ("index will not exist in new array");
        return;
    }
    //add element
    arr.push(element);
    //loop backwards and swap the adjacent values to hold order in place
    for (let i = arr.length-1; i > idx; i--) {
        Swap(arr, i, i-1);
    }
    return arr;
}

function Get(arr, idx) {
    return arr[idx];
}

function Delete(arr, idx) {
    //begin at the index to delete
    for (let i = idx; i<arr.length-1;i++) {
        //swap with the adjacent in front to push value to delete at the end 
        Swap(arr, i, i+1);
    }
    //drop the last value
    arr.pop();
    return(arr);
}

//size for multi-dimensional arrays
function Size(arr) {
    let size = 0;
    for (let i of arr) {
        size+= i.length;
    }
    return size;
}


// Find the second minimum element of an array
function SecondMin(arr) {
    for(let i of arr){
        if (arr[0] != i) {
            if(arr[0] > i) {
                var secondMin = arr[0];
                var min = i;
            }
            else{
                var secondMin = i;
                var min = arr[0];
            }
        }
    }
    for (let j of arr) {
        switch (j) {
            case j<secondMin && j>min:
                break;
            case j<min && j<secondMin:
                break;
        }
    }
}
// First non-repeating integers in an array

function FirstNonRepeatingInt(arr) { 
    //check if the 1st element is an integer and isn't repeated by the second element
    if(Number.isInteger(arr[0]) && arr[1] != arr[0]) {
        //if so, return the 0th index
        return arr[0];
    }
    let i =1;
    //loop through until nonrepeating int is found or until entire array is checked
    while(i<arr.length){
        //if it's an integer....
        if(Number.isInteger(arr[i])){
            //check the values before and after and if both are different...
            if(arr[i-1]!=arr[i] && arr[i+1] !=arr[i]){
                //return the current index
                return arr[i];
            }
        }
        //increment
        i++
    }
    //if through the entire array without an answer exit
    console.log('no non repeating integers')
    return(null);
}
// Merge two sorted arrays


//assume Arrays are sorted and non empty
var findMedianSortedArrays = function(nums1, nums2) {
    let i =0,
        j=0,
        ans=0;
    let temp = (nums1[i] <=nums2[j]? nums1[i] : nums2[j]);
        //to find the median we loop through incrementing the indeces until the midpoint is reached
    while (i+j < Math.floor((nums1.length + nums2.length)/2)) {
        //check for which index i or j needs to increment after comparing the two 
        //save the temp in case of an even length amount of array elements
        nums1[i] <= nums2[j] ? (temp = nums1[i], i++): (temp = nums2[j], j++); 
    }
    //after exiting take the next number as your answer (eg length 11 will exit at index 6)
    nums1[i] <= nums2[j] ? ans = nums1[i] : ans = nums2[j];
    //if even average the temp and ans, otherwise use the ans
    return (((nums1.length + nums2.length) % 2 ==1) ?  ans: ((ans+temp)/2));  

} 


// Rearrange positive and negative values in an array

function RearrangePositiveAndNegative(arr) {
    //begin looping through array starting at 1
    for (let i =1;i<arr.length;i++) {
        //check previous value to current value, if they are both negative
        if(arr[i] < 0 && arr[i-1] <0) {
            //loop to find the next positive number and swap
            for(let j =i+1;j<arr.length;j++){
                if(arr[j] >= 0) {
                    Swap(arr, i, j);
                }
            }
        } 
        //check previous value to current value, if they are both postive
        if(arr[i] >= 0 && arr[i-1] >=0) {
            //loop to find the next negative number and swap
            for(let j =i+1;j<arr.length;j++){
                if(arr[j] < 0) {
                    Swap(arr, i, j);
                }
            }
        } 
        //will continue until no more swaps are possible
    }
    return arr;
}
 
