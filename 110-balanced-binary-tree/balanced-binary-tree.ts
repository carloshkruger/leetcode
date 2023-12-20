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

function isBalanced(root: TreeNode | null): boolean {
    let unbalanceFound = false

    function dfs(root: TreeNode | null): number {
        if (!root) {
            return 0
        }
        if (unbalanceFound) {
            return 0
        }
        const leftDepth = dfs(root.left)
        const rightDepth = dfs(root.right)

        if (Math.abs(rightDepth - leftDepth) > 1) {
            unbalanceFound = true
        }

        return 1 + Math.max(leftDepth, rightDepth)
    }

    dfs(root)

    return !unbalanceFound
};