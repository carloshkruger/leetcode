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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false
  }

  return (root.val === subRoot.val && isSameTree(root, subRoot))
    || isSubtree(root.left, subRoot)
    || isSubtree(root.right, subRoot)
};

function isSameTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (!node1 && !node2) {
    return true
  }
  return node1?.val === node2?.val && isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
}