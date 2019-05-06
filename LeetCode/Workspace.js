module.exports = {
    findMedianSortedArrays
  }

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

    //*************************************************************************** */
