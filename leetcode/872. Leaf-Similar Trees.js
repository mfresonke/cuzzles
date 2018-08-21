/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafSeq1 = findLeafSequence(root1);
    const leafSeq2 = findLeafSequence(root2);
    return isArrEqual(leafSeq1, leafSeq2);
};

// find leaf sequence
// @return arr of sequence
function findLeafSequence(root) {
    const leafSequence = [];
    findLeafSequenceHelper(root, leafSequence);
    return leafSequence;
}

// Recursively find the Leaf Sequence
// @return {boolean} - true if root is valid, false if invalid
function findLeafSequenceHelper(root, arr) {
    // check if root is valid
    if (!root) {
        // if not, return false for invalid root
        return false;
    }
    const leftIsValid = findLeafSequenceHelper(root.left, arr);
    const rightIsValid = findLeafSequenceHelper(root.right, arr);
    // if we are a leaf
    if (!leftIsValid && !rightIsValid) {
        // add ourselves to the leaf array
        arr.push(root.val);
    }
    // return true, since we are a valid node.
    return true;
}

// @return {Boolean} true if arrays are both equal
function isArrEqual(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    const len = arr1.length;
    for (let i=0; i<len; ++i) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}
