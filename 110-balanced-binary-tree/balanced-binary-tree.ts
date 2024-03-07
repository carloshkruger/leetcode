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

function isBalanced(root: TreeNode | null): boolean {
  let isUnbalanced = false

  function helper(root: TreeNode | null): number {
    if (!root || isUnbalanced) {
      return 0
    }
    const leftHeight = helper(root.left)
    const rightHeight = helper(root.right)

    if (Math.abs(leftHeight - rightHeight) > 1) {
      isUnbalanced = true
    }

    return 1 + Math.max(leftHeight, rightHeight)
  }

  helper(root)

  return !isUnbalanced
};