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

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    
    const nums = []
    const stack = []
    let current = root
    
    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        
        const node = stack.pop()
        nums.push(node.val)
        current = node.right
    }
    
    return nums
};