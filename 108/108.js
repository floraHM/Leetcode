/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var root;
var bst = function(nums,start,end){
    if(start <= end){
        var mid = Math.floor((start + end)/2) ;
        insert(nums[mid]);
        bst(nums, start, mid - 1);
        bst(nums, mid + 1, end);
    }
};

var insert = function(val){
    var node = new TreeNode(val);
    if(root == null){
        root = node;
    }else{
        var current = root;
        var parent;
        while(1){
            parent = current;
            if(parent.val > val){
                current = parent.left;
                if(current == null){
                    parent.left = node;
                    return;
                }
            }
            else{
                current = parent.right;
                if(current == null){
                    parent.right = node;
                    return;
                }
            }
        }

    }

};
var sortedArrayToBST = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    root = null;
    bst(nums, start,end);
    return root;
};