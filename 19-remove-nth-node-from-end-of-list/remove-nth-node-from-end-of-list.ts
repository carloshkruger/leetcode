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

  let fastPointer = head
  let count = 0

  while (fastPointer && count < n) {
    fastPointer = fastPointer.next
    count++
  }

  if (!fastPointer) {
    return head.next
  }

  let slowPointer = head
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next
  }

  slowPointer.next = slowPointer.next.next

  return head
};