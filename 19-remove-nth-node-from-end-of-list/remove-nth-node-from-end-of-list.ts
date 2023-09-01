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

  let slowPointer = head
  let fastPointer = head

  for (let i = 0; i < n; i++) {
    fastPointer = fastPointer.next
  }

  if (!fastPointer) {
    return head.next
  }

  while (fastPointer.next) {
    fastPointer = fastPointer.next
    slowPointer = slowPointer.next
  }

  slowPointer.next = slowPointer.next.next

  return head
};