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

  function dfs(node: TreeNode | null, currentPath: number[], currentSum: number): void {
    if (!node) {
      return
    }

    currentSum += node.val
    currentPath.push(node.val)

    if (!node.left && !node.right && currentSum === targetSum) {
      answer.push([...currentPath])
    } else {
        dfs(node.left, currentPath, currentSum)
        dfs(node.right, currentPath, currentSum)
    }

    currentPath.pop()
  }

  dfs(root, [], 0)

  return answer
};