/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var testBalanced = function(root,depth){
    if(root == null){
        depth[0] = 0;
        return true;
    }

    var left = [],right = [];
    if(testBalanced(root.left, left) && testBalanced(root.right, right)){
        var diff = left[0] - right[0];
        if(diff <=1 && diff >= -1){
            depth[0] = 1 + (left[0] > right[0] ? left[0]:right[0]);
            return true;
        }
    }
    return false;
}
var isBalanced = function(root) {
    var depth = [];
    depth[0] = 0;
    return testBalanced(root, depth);
};