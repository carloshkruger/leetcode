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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head) {
    return null
  }

  let leftPreviousNode: ListNode | null = null
  let leftNode: ListNode = head
  let i = 1

  while (i < left && leftNode) {
    leftPreviousNode = leftNode
    leftNode = leftNode.next
    i++
  }

  let current = leftNode
  let fistSubListNode = leftNode
  let next = null
  let previous = null
  i = left
  while (i <= right) {
    next = current.next
    current.next = previous
    previous = current
    current = next
    i++
  }

  fistSubListNode.next = current

  if (!leftPreviousNode) {
    return previous
  }

  leftPreviousNode.next = previous

  return head
};