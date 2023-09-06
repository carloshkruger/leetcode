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
  const answer = []

  function dfs(root: TreeNode | null, targetSum: number, currentPath: number[]): void {
    if (!root) {
      return
    }
    if (root.val === targetSum && !root.left && !root.right) {
      currentPath.push(root.val)
      answer.push(currentPath)
      return
    }
    
    dfs(root.left, targetSum - root.val, [...currentPath, root.val])
    dfs(root.right, targetSum - root.val, [...currentPath, root.val])
  }

  dfs(root, targetSum, [])

  return answer
};