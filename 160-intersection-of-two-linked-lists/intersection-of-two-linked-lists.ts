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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) {
    return null
  }

  const visited = new Set()

  let current = headA
  while (current) {
    visited.add(current)
    current = current.next
  }

  current = headB
  while (current) {
    if (visited.has(current)) {
      return current
    }
    visited.add(current)
    current = current.next
  }

  return null
};