class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node = new Node(12, new Node(44), new Node(555));

const inOrderSearch = (node) => {
  if (node === null) return;

  inOrderSearch(node.left);
  console.log(node.value);
  inOrderSearch(node.right);
};

inOrderSearch(node);
