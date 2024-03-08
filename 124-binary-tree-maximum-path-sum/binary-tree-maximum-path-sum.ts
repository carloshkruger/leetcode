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

  let max = -Infinity

  function dfs(root: TreeNode | null): number {
    if (!root) {
      return 0
    }

    const maxSumLeft = Math.max(dfs(root.left), 0)
    const maxSumRight = Math.max(dfs(root.right), 0)
    const currentSum = root.val + maxSumLeft + maxSumRight

    max = Math.max(max, currentSum)

    return Math.max(root.val, Math.max(root.val + maxSumLeft, root.val + maxSumRight))
  }

  dfs(root)

  return max
};