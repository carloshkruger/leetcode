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
  if (!root) {
    return 0
  }

  let goodNodesCount = 0

  function helper(root: TreeNode | null, maxValue: number) {
    if (!root) {
      return
    }
    if (root.val >= maxValue) {
      goodNodesCount++
    }

    maxValue = Math.max(maxValue, root.val)

    helper(root.left, maxValue)
    helper(root.right, maxValue)
  }

  helper(root, root.val)

  return goodNodesCount
};