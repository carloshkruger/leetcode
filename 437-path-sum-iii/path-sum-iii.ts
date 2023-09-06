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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0
  }

  function dfs(node: TreeNode | null, currentPath: number[]): number {
    if (!node) {
      return 0 
    }

    currentPath.push(node.val)
    let pathSum = 0
    let pathCount = 0
    for (let i = currentPath.length-1; i >= 0; i--) {
      pathSum += currentPath[i]
      if (pathSum === targetSum) {
        pathCount++
      }
    }

    pathCount += dfs(node.left, [...currentPath])
    pathCount += dfs(node.right, [...currentPath])

    return pathCount
  }

  return dfs(root, [])
};