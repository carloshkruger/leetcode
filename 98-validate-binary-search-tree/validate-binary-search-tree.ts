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
  function helper(root: TreeNode | null, min: number, max: number): boolean {
    if (!root) {
      return true
    }

    return root.val > min
      && root.val < max
      && helper(root.left, min, root.val)
      && helper(root.right, root.val, max)
  }

  return helper(root, -Infinity, Infinity)
};