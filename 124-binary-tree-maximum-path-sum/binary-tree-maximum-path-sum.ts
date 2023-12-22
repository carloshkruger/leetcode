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

function maxPathSum(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    let maxSum = -Infinity

    function dfs(root: TreeNode | null): number {
        if (!root) {
            return 0
        }

        const leftSum = dfs(root.left)
        const rightSum = dfs(root.right)

        maxSum = Math.max(
            maxSum,
            root.val, 
            root.val + leftSum + rightSum, 
            root.val + leftSum, 
            root.val + rightSum
        )

        return Math.max(root.val, root.val + Math.max(leftSum, rightSum))
    }

    dfs(root)

    return maxSum
};