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
  let sum = 0

  function dfs(root: TreeNode | null, current: number): void {
    if (!root) {
      return
    }
    current = current * 10 + root.val
    if (!root.left && !root.right) {
      sum += current
      return
    }
    dfs(root.left, current)
    dfs(root.right, current)
  }

  dfs(root, 0)

  return sum
};