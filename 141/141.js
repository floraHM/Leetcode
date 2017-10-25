/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null){
        return false;
    }
    var step1 = head;
    var step2 = head;
    while(step1.next != null && step2.next != null && step2.next.next != null){
        step1 = step1.next;
        step2 = step2.next.next;
        if(step1 == step2){
            return true;
        }
    }
    return false;
};