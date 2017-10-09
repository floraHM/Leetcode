/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if((p == null && q != null) || (p != null && q == null)){
        return false;
    }
    if(p == null && q == null){
        ;
    }
    if(p != null && q != null){
        if(p.val != q.val){
            return false;
        }
        else{
            if(!isSameTree(p.left,q.left)){
                return false;
            }
            if(!isSameTree(p.right,q.right)){
                return false;
            }
        }
    }
    return true;
};