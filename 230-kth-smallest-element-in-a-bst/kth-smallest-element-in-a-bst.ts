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
  const values = []

  function dfs(root: TreeNode | null) {
    if (!root) {
      return
    }
    dfs(root.left)
    values.push(root.val)
    dfs(root.right)
  }

  dfs(root)

  return values[k-1]
};