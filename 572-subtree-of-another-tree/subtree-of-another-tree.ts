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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) {
        return false
    }
    if (isEqual(root, subRoot)) {
        return true
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isEqual(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2) {
        return true
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
        return false
    }
    return node1.val === node2.val
        && isEqual(node1.left, node2.left)
        && isEqual(node1.right, node2.right)
}