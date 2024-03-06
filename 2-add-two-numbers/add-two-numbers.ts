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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  function helper(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
    if (!l1 && !l2) {
      return null
    }

    let value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
    if (value > 9) {
      carry = Math.floor(value / 10)
    } else {
      carry = 0
    }
    value = value % 10

    const node = new ListNode(value)
    node.next = helper(l1?.next || null, l2?.next || null, carry)

    if (!node.next && carry > 0) {
      node.next = new ListNode(carry)
    }

    return node
  }

  return helper(l1, l2, 0)
};