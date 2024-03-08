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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const list = []

  function dfs(root: TreeNode | null, current: number[], targetSum: number): void {
    if (!root) {
      return
    }
    targetSum -= root.val
    current.push(root.val)
    if (targetSum === 0 && !root.left && !root.right) {
      list.push([...current])
      return
    }
    dfs(root.left, [...current], targetSum)
    dfs(root.right, [...current], targetSum)
  }

  dfs(root, [], targetSum)

  return list
};