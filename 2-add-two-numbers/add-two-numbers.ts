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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
  if (!l1 && !l2) {
    return null
  }

  const num1 = l1?.val ?? 0
  const num2 = l2?.val ?? 0
  let sum = num1 + num2 + carry

  if (sum > 9) {
    sum = sum % 10
    carry = 1
  } else if (carry === 1) {
    carry = 0
  }

  const node = new ListNode(sum)
  node.next = addTwoNumbers(l1?.next || null, l2?.next || null, carry)

  if (!node.next && carry === 1) {
    node.next = new ListNode(1)
  }

  return node
};

