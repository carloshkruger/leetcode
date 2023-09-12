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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const answer = []
  const queue = [root]
  while (queue.length) {
    const levelSize = queue.length
    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift()

      if (i === levelSize) {
        answer.push(currentNode.val)
      }

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
  }

  return answer
};