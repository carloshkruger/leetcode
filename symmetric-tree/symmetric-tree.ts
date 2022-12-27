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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return false
    }
    const queue = [root]
    let isSymmetricTree = true
    while (queue.length && isSymmetricTree) {
        const queueLength = queue.length
        const list = []
        for (let i = 0; i < queueLength; i++) {
            const node = queue.shift()
            list.push(node?.val)
            if (node) {
                queue.push(node.left)
                queue.push(node.right) 
            }
        }
        
        if (list.length > 1) {
            let start = 0
            let end = list.length - 1
            while (start <= end) {
                if (list[start] !== list[end]) {
                    isSymmetricTree = false
                    break
                }
                start++
                end--
            }
        }
    }
    return isSymmetricTree
};