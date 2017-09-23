/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binary_search = function(nums, target){
    var low = 0;
    var high = nums.length-1;
    var mid;
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        if(nums[mid] == target){    //找到
            return mid;
        }
        else if(nums[mid] > target){
            high = mid -1;
        }
        else if(nums[mid] < target){
            low = mid + 1;
        }
    }
    if(nums[mid] < target){    //找不到 中间结果小于target
        return mid + 1;
    }
    if(nums[mid] > target){   //找不到 中间结果大于target
        return mid;
    }
}

var searchInsert = function(nums, target) {
    return binary_search(nums, target);   //二分查找
};