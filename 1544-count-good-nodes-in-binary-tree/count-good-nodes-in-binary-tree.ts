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

function goodNodes(root: TreeNode | null): number {
  let count = 0

  function helper(root: TreeNode | null, max: number) {
    if (!root) {
      return
    }
    if (root.val >= max) {
      count++
    }
    max = Math.max(max, root.val)
    helper(root.left, max)
    helper(root.right, max)
  }

  helper(root, -Infinity)

  return count
};