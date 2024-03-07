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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0

  function helper(root: TreeNode | null): number {
    if (!root) {
      return 0
    }

    const leftSize = helper(root.left)
    const rightSize = helper(root.right)

    diameter = Math.max(diameter, leftSize + rightSize)

    return 1 + Math.max(leftSize, rightSize)
  }

  helper(root)

  return diameter
};