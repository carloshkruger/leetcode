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

const SEPARATOR = ';'
const PLACEHOLDER = '#'

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) {
    return `${PLACEHOLDER}${SEPARATOR}`
  }
  return `${root.val}${SEPARATOR}${serialize(root.left)}${serialize(root.right)}`
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const list = data.split(SEPARATOR).reverse()

  function helper(list: string[]): TreeNode | null {
    const current = list.pop()
    if (current === PLACEHOLDER) {
      return null
    }
    const node = new TreeNode(Number(current))
    node.left = helper(list)
    node.right = helper(list)
    return node
  }

  return helper(list)
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */