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
    const finalList = new ListNode()
    let finalListTail = finalList
    
    function helper(list1: ListNode | null, list2: ListNode | null, finalListTail: ListNode | null): void {
        if (!list1 && !list2) {
            return
        }
        if (list1 && list2) {
            if (list1.val < list2.val) {
                finalListTail.next = list1
                return helper(list1.next, list2, finalListTail.next)
            }
            finalListTail.next = list2
            return helper(list1, list2.next, finalListTail.next)
        }
        if (list1) {
            finalListTail.next = list1
        } else if (list2) {
            finalListTail.next = list2
        }
        return
    }
    
    helper(list1, list2, finalListTail)

    return finalList.next
};