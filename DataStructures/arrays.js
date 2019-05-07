/* Common Array Methods*/

//test cases

let array1 = [4,7,13,2,-1],
    array2 = [4,7,13,2,-1, 80],
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
}

function Insert(arr, element, idx) {
    if( idx > arr.length) {
        console.log ("index will not exist in new array");
        return ("index will not exist in new array");
    }
    arr.push(element);
    for (let i = arr.length-1; i > idx; i--) {
        console.log(arr);
        Swap(arr, i, i-1);
    }
    return arr;
}

function Get(arr, idx) {
    return arr[idx];
}

function Delete(arr, idx) {
    for (let i = idx; i<arr.length-1;i++) {
        Swap(arr, i, i+1);
    }
    return(arr.pop());
}

//size for multi-dimensional arrays
function Size(arr) {
    let size = 0;
    for (let i of arr) {
        size+= i.length;
    }
    return size;
}
