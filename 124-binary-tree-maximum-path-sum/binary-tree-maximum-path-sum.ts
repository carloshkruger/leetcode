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

function maxPathSum(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let maxSum = -Infinity

  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0
    }
    const leftSum = Math.max(dfs(node.left), 0)
    const rightSum = Math.max(dfs(node.right), 0)

    maxSum = Math.max(maxSum, node.val + leftSum + rightSum)

    return node.val + Math.max(leftSum, rightSum)
  }

  dfs(root)

  return maxSum
}