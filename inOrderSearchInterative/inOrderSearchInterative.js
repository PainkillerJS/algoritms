class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node = new Node(12, new Node(44), new Node(555));

const inOrderSearchInterative = (node) => {
  const stack = [];

  while (stack.length || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      console.log(node.value);
      node = node.right;
    }
  }
};

inOrderSearchInterative(node);
