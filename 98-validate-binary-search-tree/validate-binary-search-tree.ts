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

function isValidBST(root: TreeNode | null): boolean {
    return bst(root, -Infinity, Infinity)
};

function bst(node: TreeNode | null, minValue: number, maxValue: number): boolean {
    if (!node) {
        return true
    }
    if (node.val <= minValue || node.val >= maxValue) {
        return false
    }
    return bst(node.left, minValue, node.val) && bst(node.right, node.val, maxValue)
}