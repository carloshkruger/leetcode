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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false
  }

  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let secondHalfHead = reverse(slow)
  let secondHalfHeadTemp = secondHalfHead
  let firstHalfHead = head

  while (firstHalfHead && secondHalfHead) {
    if (firstHalfHead.val !== secondHalfHead.val) {
      break
    }
    firstHalfHead = firstHalfHead.next
    secondHalfHead = secondHalfHead.next
  }

  reverse(secondHalfHeadTemp)

  if (firstHalfHead === null || secondHalfHead === null) {
    return true
  }
  return false
};

function reverse(node: ListNode): ListNode {
  let prev = null
  while (node) {
    const temp = node.next
    node.next = prev
    prev = node
    node = temp
  }
  return prev
}