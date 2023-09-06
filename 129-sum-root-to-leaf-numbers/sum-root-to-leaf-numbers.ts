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

function sumNumbers(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, currentSum: number): number {
    if (!node) {
      return 0
    }

    currentSum = 10 * currentSum + node.val

    if (!node.left && !node.right) {
      return currentSum
    }

    return dfs(node.left, currentSum) + dfs(node.right, currentSum)
  }

  return dfs(root, 0)
};