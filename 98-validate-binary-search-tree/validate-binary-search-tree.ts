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

function isValidBST(root: TreeNode | null): boolean {
  function helper(root: TreeNode | null, minValue: number, maxValue: number): boolean {
    if (!root) {
      return true
    }
    if (root.val <= minValue || root.val >= maxValue) {
      return false
    }
    return helper(root.left, minValue, root.val) && helper(root.right, root.val, maxValue)
  }

  return helper(root, -Infinity, Infinity)
};