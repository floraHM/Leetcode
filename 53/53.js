/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var len = nums.length;
    var tmp = nums[0];
    var result = nums[0];

    for(var i = 1; i < len; i++){
        tmp = nums[i] >= nums[i] + tmp ? nums[i] : nums[i] + tmp;
        if(tmp > result)
            result = tmp;
    }
    return result;
};