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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  const queue = [root]
  const answer = []
  while (queue.length) {
    const levelSize = queue.length
    const levelList = []
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      levelList.push(currentNode.val)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    answer.push(levelList)
  }
  return answer.reverse()
};