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

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let currentNode = head

    while (currentNode) {
        const temp = currentNode.next
        currentNode.next = prev
        prev = currentNode
        currentNode = temp
    }

    return prev
};