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

  let fasterPointer = head

  for (let i = 0; i < n; i++) {
    fasterPointer = fasterPointer.next
  }

  if (!fasterPointer) {
    return head.next
  }

  let slowerPointer = head
  while (fasterPointer.next) {
    fasterPointer = fasterPointer.next
    slowerPointer = slowerPointer.next
  }

  slowerPointer.next = slowerPointer.next.next

  return head
};