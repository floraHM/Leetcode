/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null){
        return [];
    }
    var pos = new ListNode(head.val);
    var val = pos.val;
    var current = head;
    var result = pos;
    while(current != null ){
        if(current.val != val){
            pos.next = new ListNode(current.val);
            pos = pos.next;
            val = current.val;
        }
        current = current.next;
    }
    return result;
};