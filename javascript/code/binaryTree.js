// Tree definition
function Tree(val) {
  this.val = val;
  this.left = null;
  this.left = null;
}

// pre-order, root-left-right
Tree.prototype.preOrder = function (root, callback) {
  preOrderHelper(oot, callback);
};

let preOrderHelper = function (root, callback) {
  if (root !== null) {
    callback(root);
    preOrderHelper(root.left, callback);
    preOrderHelper(root.right, callback);
  }
};

// pre-order, root-left-right, non-recursive
Tree.prototype.preOrderRecursive = function (root, callback) {
  const stack = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    callback(node);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
};

// left-root-right
Tree.prototype.inOrder = function (root, callback) {
  if (root !== null) {
    inOrderHelper(root.left, callback);
    callback(root);
    inOrderHelper(root.right, callback);
  }
};

Tree.prototype.inOrderRecursive = function (root, callback) {
  const stack = [];
  let node = root;
  while (node !== null || stack.length) {

    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      callback()
    }
  }
};

Tree.prototype.postOrder = function (root, callback) {
  postOrder(root, callback);
};

let postOrderHelper = function (root, callback) {
  if (root !== null) {
    postOrderHelper(root.left, callback);
    postOrderHelper(root.right, callback);
    callback(root);
  }
};

Tree.prototype.postOrderRecursive = function (root, callback) {
  let stack = [];
  let node = root;
  stack.push(node);
  while (stack.length) {
    node = stack.pop();
    if (stack.length && node == stack[stack.length - 1]) {
      if (node.right) {
        stack.push(node.right);
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
        stack.push(node.left);
      }
    } else {
      callback(node);
    }
  }
};