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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result = []
  if (!root) {
    return result
  }

  const queue = [root]
  let direction: 'left' | 'right' = 'right'
  while (queue.length) {
    const levelSize = queue.length
    const levelList = []
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
      levelList.push(currentNode.val)
    }
    if (direction === 'right') {
      result.push(levelList)
      direction = 'left'
    } else {
      result.push(levelList.reverse())
      direction = 'right'
    }
  }
  return result
};