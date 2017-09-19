/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result = null;
    var current;
    if(l1 == null && l2 == null){
        return result;
    }
    else if(l1 != null && l2 == null){
        return l1;
    }
    else if(l1 == null && l2 != null){
        return l2;
    }
    else{
        if(l1.val <= l2.val){
            result = l1;
            l1 = l1.next;
        }else{
            result = l2;
            l2 = l2.next;
        }
        current = result;
        while(1){
            if(l1 == null){
                current.next = l2;
                return result;
            }
            if(l2 == null){
                current.next = l1;
                return result;
            }
            if(l1.val <= l2.val){
                current.next = l1;
                current = current.next;
                l1 = l1.next;
            }
            else{
                current.next = l2;
                current = current.next;
                l2 = l2.next;
            }
        }
    }
};