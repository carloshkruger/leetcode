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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length) {
    const levelSize = queue.length
    let levelSum = 0

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      levelSum += currentNode.val
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    result.push(levelSum / levelSize)
  }

  return result
};