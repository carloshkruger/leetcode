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

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    
    const nums: number[] = []
    
    function helper(tree: TreeNode) {
        nums.push(tree.val)
        if (tree.left) {
            helper(tree.left)
        }
        if (tree.right) {
            helper(tree.right)
        }
    }
    
    helper(root)
    
    return nums
};