/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }

  const queue = [root]

  while (queue.length) {
    const levelSize = queue.length
    const levelList = []
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift()
      levelList.push(current.left?.val)
      levelList.push(current.right?.val)
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
    let start = 0
    let end = levelList.length - 1
    while (start < end) {
      if (levelList[start] !== levelList[end]) {
        return false
      }
      start++
      end--
    }
  }

  return true
};