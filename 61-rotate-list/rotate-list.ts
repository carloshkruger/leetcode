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
  if (!head) {
    return null
  }

  let length = 0
  let lastNode = null
  let current = head
  while (current) {
    lastNode = current
    current = current.next
    length++
  }

  k = k % length

  if (k === 0) {
    return head
  }

  current = head
  for (let i = 0; i < (length - k - 1); i++) {
    current = current.next
  }

  const nodeToReturn = current.next
  current.next = null
  lastNode.next = head

  return nodeToReturn
};