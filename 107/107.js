/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var wfs = function(root, result){
    var que = [];
    var current;
    que.push(root);
    que.push('|');
    var list = [];
    while(1){
        current = que.shift();
        if(current == '|'){
            if(que.length == 0){
                break;
            }
            else{
                que.push("|");
                result.push(list);
                list = [];
                continue;
            }
        }
        list.push(current.val);
        if(current.left != null){
            que.push(current.left);
        }
        if(current.right != null){
            que.push(current.right);
        }
    }
    result.push(list);
    return result;
};
var levelOrderBottom = function(root) {
    var result = [];
    if(root == null){
        return [];
    }
    wfs(root,result);
    return result.reverse();

};