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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    const answer = []
    const queue = [{ node: root, level: 0 }]
    while (queue.length) {
        const { node, level } = queue.shift()
        if (answer[level] === undefined) {
            answer[level] = node.val
        }
        if (node.right) {
            queue.push({ node: node.right, level: level + 1 })
        }
        if (node.left) {
            queue.push({ node: node.left, level: level + 1 })
        }
    }
    return answer
};