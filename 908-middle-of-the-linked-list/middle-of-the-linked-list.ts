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
  let slowPointer = head
  let fastPointer = head

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
  }

  return slowPointer
};