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

function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0
    let value = undefined

    function dfs(node: TreeNode | null, k: number) {
        if (value !== undefined) {
            return
        }
        if (node.left) {
            dfs(node.left, k)
        }
        count++
        if (count === k) {
            value = node.val
        }
        if (node.right) {
            dfs(node.right, k)
        }
    };

    dfs(root, k)

    return value
};