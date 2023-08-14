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

    const answer = new Map()
    const queue = [{ node: root, level: 0 }]
    
    while (queue.length) {
        const current = queue.shift()
        const levelList = answer.get(current.level) ?? []
        levelList.push(current.node.val)
        answer.set(current.level, levelList)

        if (current.node.left) {
            queue.push({ node: current.node.left, level: current.level + 1 })
        }
        if (current.node.right) {
            queue.push({ node: current.node.right, level: current.level + 1 })
        }
    }

    return [...answer.values()]
};