/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var pathSum = function(root,sum,result){
    if(root == null){
        return false;
    }
    if(root.left == null && root.right == null){
        if(result + root.val == sum)
            return true;
        else
            return false;
    }
    if(pathSum(root.left,sum,result+root.val)){
        return true;
    }
    if(pathSum(root.right,sum,result+root.val)){
        return true
    }
    return false;
}
var hasPathSum = function(root, sum) {
    if(root == null)
        return false;
    else
        return pathSum(root,sum,0);
};