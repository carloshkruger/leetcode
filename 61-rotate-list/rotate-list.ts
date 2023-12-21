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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k < 1) {
    return head
  }

  let listLength = 1
  let current = head
  while (current.next) {
    current = current.next
    listLength++
  }

  k = k % listLength
  const skip = listLength - k
  current.next = head

  for (let i = 0; i < skip; i++) {
    current = current.next
  }

  const temp = current.next
  current.next = null

  return temp
};