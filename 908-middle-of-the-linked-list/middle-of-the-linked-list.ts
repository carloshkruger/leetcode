/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let fasterNode = head
    let slowerNode = head

    while (fasterNode && fasterNode.next) {
        slowerNode = slowerNode.next
        fasterNode = fasterNode.next.next
    }

    return slowerNode
};