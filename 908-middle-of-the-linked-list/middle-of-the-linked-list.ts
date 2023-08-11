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
    const list = []
    let currentNode = head

    while (currentNode) {
        list.push(currentNode)
        currentNode = currentNode.next
    }

    const middleIndex = Math.floor(list.length / 2)
    return list[middleIndex]
};