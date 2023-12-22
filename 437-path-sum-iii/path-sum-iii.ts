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
    let pathCount = 0

    function dfs(root: TreeNode | null, currentPath: number[]) {
        if (!root) {
            return
        }

        currentPath.push(root.val)

        let currentSum = 0
        for (let i = currentPath.length - 1; i >= 0; i--) {
            currentSum += currentPath[i]
            if (currentSum === targetSum) {
                pathCount++
            }
        }

        dfs(root.left, [...currentPath])
        dfs(root.right, [...currentPath])
    }

    dfs(root, [])

    return pathCount
};