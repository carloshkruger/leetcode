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
    let done = false
    let current = root
    
    while (!done) {
        if (current) {
            stack.push(current)
            current = current.left
        } else {
            if (stack.length) {
                current = stack.pop()
                nums.push(current.val)
                current = current.right
            } else {
                done = true
            }
        }
    }
    
    return nums
};