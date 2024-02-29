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

const DELIMITER = ','
const EMPTY_REPLACEMENT = '#'

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) {
    return EMPTY_REPLACEMENT
  }
  return `${root.val}${DELIMITER}${serialize(root.left)}${DELIMITER}${serialize(root.right)}`
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const list = data.split(DELIMITER).reverse()

  function helper(): TreeNode | null {
    if (!list.length) {
      return null
    }
    const value = list.pop()
    if (value === EMPTY_REPLACEMENT) {
      return null
    }

    const node = new TreeNode(Number(value))
    node.left = helper()
    node.right = helper()

    return node
  }

  return helper()
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */