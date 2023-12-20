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

function hasCycle(head: ListNode | null): boolean {
    let slowerPointer = head
    let fasterPointer = head

    while (fasterPointer && fasterPointer.next) {
        slowerPointer = slowerPointer.next
        fasterPointer = fasterPointer.next.next

        if (slowerPointer === fasterPointer) {
            return true
        }
    }

    return false
};