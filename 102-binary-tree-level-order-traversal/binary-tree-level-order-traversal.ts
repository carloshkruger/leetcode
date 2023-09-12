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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const answer = []
  const queue = [root]
  
  while (queue.length) {
    const levelSize = queue.length
    const levelList = []

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift()

      levelList.push(current.val)

      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }

    answer.push(levelList)
  }

  return answer
};