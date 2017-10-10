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

var deepSearch =function(root,max){
    if(root === null){
        return max;
    }
    else if(root.left === null && root.right === null){
        max++;
        return max;
    }
    else if(root.left != null && root.right === null){
        max++;
        return deepSearch(root.left,max);
    }
    else if(root.left === null && root.right != null){
        max++;
        return deepSearch(root.right,max);
    }
    else{
        max++;
        var left = deepSearch(root.left,max);
        var right = deepSearch(root.right,max);
        if(left >= right){
            return left;
        }
        else{
            return right;
        }
    }
};
var maxDepth = function(root) {
    var max = 0;
    return deepSearch(root,max);
};