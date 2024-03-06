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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let slowPointer = head
  let fastPointer = head

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
  }

  let secondHalfHead = reverse(slowPointer)
  let current = head

  while (current && secondHalfHead) {
    let temp = current.next
    current.next = secondHalfHead
    current = temp

    temp = secondHalfHead.next
    secondHalfHead.next = current
    secondHalfHead = temp
  }

  if (current) {
    current.next = null
  }
};

function reverse(head: ListNode | null): ListNode | null {
  let prev = null
  let current = head

  while (current) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }

  return prev
}