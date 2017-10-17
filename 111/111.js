/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function(root) {
    if(root == null){
        return 0;
    }
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    if(root.left != null && root.right != null){
        return 1 + (left < right ? left:right);
    }
    else{
        return 1 + (root.left != null ? left:right);
    }
};