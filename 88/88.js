/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = 0, j = 0;
    nums1.splice(m, nums1.length - m);
    nums2.splice(n, nums2.length - n);
    while(i < m && j < n){
        if(nums1[i] > nums2[j]){
            nums1.splice(i,0,nums2[j]);
            i = i + 1;
            m = m + 1;
            j++;
        }
        else{
            i = i + 1;
        }
    }
    if(j < n){
        for(; j<n; j++){
            nums1.splice(i,0,nums2[j]);
            i++;
        }
    }
};