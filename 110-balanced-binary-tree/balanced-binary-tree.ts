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

    function dfs(node: TreeNode | null) {
        if (!node) {
            return 0
        } else if (!unbalanceFound) {
            const leftDepth = dfs(node.left)
            const rightDepth = dfs(node.right)

            if (Math.abs(leftDepth - rightDepth) > 1) {
                unbalanceFound = true
            }

            return 1 + Math.max(leftDepth, rightDepth)
        }
    }

    dfs(root)

    return !unbalanceFound
};
