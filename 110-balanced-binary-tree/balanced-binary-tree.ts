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
  let isTreeBalanced = true

  function heightTree(root: TreeNode | null): number {
    if (!root) {
      return 0
    }
    const leftHeight = heightTree(root.left) + 1
    const rightHeight = heightTree(root.right) + 1

    if (Math.abs(leftHeight - rightHeight) > 1) {
      isTreeBalanced = false
    }

    return Math.max(leftHeight, rightHeight)
  }

  heightTree(root)

  return isTreeBalanced
};