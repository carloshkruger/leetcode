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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let finalList = new ListNode()
    let finalListTail = finalList

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            finalListTail.next = list1
            list1 = list1.next
        } else {
            finalListTail.next = list2
            list2 = list2.next
        }
        finalListTail = finalListTail.next
    }

    if (list1) {
        finalListTail.next = list1
    } else {
        finalListTail.next = list2
    }

    return finalList.next
};