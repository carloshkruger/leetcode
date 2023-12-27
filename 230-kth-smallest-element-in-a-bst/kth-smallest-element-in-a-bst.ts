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

function kthSmallest(root: TreeNode | null, k: number): number {
  let value = null

  function dfs(root: TreeNode | null) {
    if (!root || value !== null) {
      return
    }
    dfs(root.left)
    k--
    if (k === 0) {
      value = root.val
    }
    dfs(root.right)
  }

  dfs(root)

  return value
};