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
  if (!l1 && !l2) {
    return null
  }

  const nums1 = getValue(l1)
  const nums2 = getValue(l2)
  const sumList = []
  let index = 0
  let lastIndex = nums1.length > nums2.length ? nums1.length : nums2.length
  let carry = 0

  while (index < lastIndex) {
    let sum = (nums1[index] ?? 0) + (nums2[index] ?? 0) + carry
    if (sum > 9) {
      sum = sum % 10
      carry = 1
    } else if (carry === 1) {
      carry = 0
    }
    sumList.push(sum)
    index++
  }

  if (carry === 1) {
    sumList.push(1)
  }

  const head = new ListNode()
  let tail = head
  index = 0

  while (index < sumList.length) {
    tail.next = new ListNode(sumList[index])
    tail = tail.next
    index++
  }

  return head.next
};

function getValue(list: ListNode | null): number[] {
  let current = list
  let nums = []

  while (current) {
    nums.push(current.val)
    current = current.next
  }

  return nums
}