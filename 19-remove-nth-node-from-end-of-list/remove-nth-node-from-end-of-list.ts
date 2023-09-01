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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null
  }

  let current = head
  let nodeToRemove = head
  let previousNodeToRemove = head
  let count = 0

  while (current) {
    count++
    current = current.next
    if (count >= n && current) {
      previousNodeToRemove = nodeToRemove
      nodeToRemove = nodeToRemove.next
    }
  }

  if (count === 1 || previousNodeToRemove === nodeToRemove) {
    return nodeToRemove.next
  }

  previousNodeToRemove.next = nodeToRemove.next

  return head
};