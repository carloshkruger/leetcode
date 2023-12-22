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

    function dfs(root: TreeNode | null): number {
        if (!root) {
            return 0
        }

        const leftPathLength = dfs(root.left)
        const rightPathLength = dfs(root.right)

        longestPath = Math.max(longestPath, leftPathLength + rightPathLength)

        return 1 + Math.max(leftPathLength, rightPathLength)
    }

    dfs(root)

    return longestPath
};