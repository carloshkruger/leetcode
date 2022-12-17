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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const answer = []
    helper(root, new Map(), answer)
    return answer
};

function helper(root: TreeNode | null, map: Map<string, number>, answer: TreeNode[]): string {
    if (!root) {
        return ''
    }
            
    const left = helper(root.left, map, answer)
    const right = helper(root.right, map, answer)
    
    const value = `${root.val}-${left}-${right}`
    
    if (map.get(value) === 1) {
        answer.push(root)
    }
    
    map.set(value, (map.get(value) ?? 0) + 1)
    
    return value
}