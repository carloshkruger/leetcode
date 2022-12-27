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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }
    
    const queue = [{ node: root, level: 0 }]
    const nums = []
    
    while (queue.length) {
        const {node, level} = queue.shift()
        if (Array.isArray(nums[level])) {
            nums[level].push(node.val)
        } else {
            nums[level] = [node.val]
        }

        if (node.left) {
            queue.push({ node: node.left, level: level+1 })
        }
        if (node.right) {
            queue.push({ node: node.right, level: level+1 })
        }
    }
    
    return nums
};