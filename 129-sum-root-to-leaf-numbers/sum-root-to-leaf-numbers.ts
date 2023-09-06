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

function sumNumbers(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let totalSum = 0

  function dfs(node: TreeNode | null, numberAsString: string): void {
    if (!node) {
      return
    }

    numberAsString += node.val.toString()

    if (!node.left && !node.right) {
      totalSum += Number(numberAsString)
      return
    }

    dfs(node.left, numberAsString)    
    dfs(node.right, numberAsString)
  }

  dfs(root, '')

  return totalSum
};