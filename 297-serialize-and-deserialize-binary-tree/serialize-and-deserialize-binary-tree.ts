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

/*
 * Encodes a tree to a single string.
 */
const DELIMITER = ';'
const EMPTY_PLACEHOLDER = 'null'

function serialize(root: TreeNode | null): string {
  if (!root) {
    return EMPTY_PLACEHOLDER + DELIMITER
  }
  return root.val + DELIMITER + serialize(root.left) + serialize(root.right)
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  function helper(queue: string[]): TreeNode | null {
    const item = queue.shift()

    if (item === EMPTY_PLACEHOLDER) {
      return null
    }

    const node = new TreeNode(Number(item))

    node.left = helper(queue)
    node.right = helper(queue)

    return node
  }

  return helper(data.split(DELIMITER))
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */