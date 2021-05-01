import data from '../api/data.json';

const compareDate = (d1, d2) => {
  const date1 = d1.split('-');
  const date2 = d2.split('-');
  if (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] === date2[2])
    return 0;

  for (let i = 0; i < date1.length; i++) {
    if (date1[i] > date2[i]) return 1;
    else if (date1[i] < date2[i]) return -1;
  }
};

class BSTree {
  static createTree(data) {
    let root = null;
    data.forEach((d) => {
      root = BSTree.addNode(root, new Node(d));
    });
    return root;
  }

  static addNode(root, node) {
    if (root === null) {
      root = node;
      return root;
    }

    let currentNode = root;
    let preNode = null;
    while (currentNode !== null) {
      preNode = currentNode;
      if (compareDate(node.data.date, currentNode.data.date) === 1)
        currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    if (compareDate(node.data.date, preNode.data.date) === 1)
      preNode.right = node;
    else preNode.left = node;
    return root;
  }

  static searchNode(root, date) {
    let result = [];
    if (root === null) return result;
    let currentNode = root;
    while (currentNode !== null) {
      let compare = compareDate(date, currentNode.data.date);
      if (compare === 0) {
        result = [...result, currentNode.data];
        currentNode = currentNode.left;
      } else if (compare === 1) currentNode = currentNode.right;
      else if (compare === -1) currentNode = currentNode.left;
    }
    return result;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.right = null; // greater than
    this.left = null; // equal or less than
  }
}

export const root = BSTree.createTree(data);

export default function findDate(root, date) {
  return BSTree.searchNode(root, date);
}
