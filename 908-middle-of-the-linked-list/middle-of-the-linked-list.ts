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
    let count = 0
    let currentNode = head

    while (currentNode) {
        count++
        currentNode = currentNode.next
    }

    const middleIndex = Math.floor(count / 2)

    currentNode = head
    for (let i = 0; i < middleIndex; i++) {
        currentNode = currentNode.next
    }
    return currentNode
};