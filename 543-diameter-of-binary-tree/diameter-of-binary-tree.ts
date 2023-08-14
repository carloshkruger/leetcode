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
    let longestPath = 0

    function dfs(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        const leftPath = dfs(node.left)
        const rightPath = dfs(node.right)

        longestPath = Math.max(longestPath, leftPath + rightPath)

        return 1 + Math.max(leftPath, rightPath)
    }

    dfs(root)

    return longestPath
};