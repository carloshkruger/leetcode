/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  if (!head) {
    return null
  }

  const copyMap = new Map()
  const newList = new Node()
  let tail = newList
  let current = head
  
  while (current) {
    const node = new Node(current.val)
    copyMap.set(current, node)
    current = current.next
    tail.next = node
    tail = tail.next
  }

  current = head
  tail = newList.next
  while (current) {
    if (current.random) {
      tail.random = copyMap.get(current.random) || null
    }
    current = current.next
    tail = tail.next
  }

  return newList.next
};