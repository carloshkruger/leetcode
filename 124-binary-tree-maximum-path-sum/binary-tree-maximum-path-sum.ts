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
  let max = -Infinity

  function helper(root: TreeNode | null): number {
    if (!root) {
      return 0
    }
    const leftSum = Math.max(helper(root.left), 0)
    const rightSum = Math.max(helper(root.right), 0)
    const currentSum = leftSum + rightSum + root.val

    max = Math.max(max, currentSum)

    return Math.max(leftSum + root.val, rightSum + root.val)
  }

  helper(root)

  return max
};