/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    // console.log("ran", root)
    // if (!root) return [val]

    // console.log("root", root)
    // let foundNode
    // if (root.val < val) {
    //     foundNode = insertIntoBST(root.left, val)
    // } else {
    //     foundNode = insertIntoBST(root.right, val)
    // }
    // console.log("foundnode", foundNode)
    if (!root) return new TreeNode(val)

    let current = root
    while (current.left || current.right) {
        if (val < current.val && current.left) {
            current = current.left
        } else if (val > current.val && current.right) {
            current = current.right
        } else break
    }
    let newNode = new TreeNode(val)
    val > current.val ? current.right = newNode : current.left = newNode
    return root
};