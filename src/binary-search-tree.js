const { NotImplementedError, checkForNotThrowingErrors } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement
  }

  add(data) {
    this.rootElement = addWithin(this.rootElement, data)

    function addWithin(node, data){
      if (!node) {
        return new Node(data);
      } else if (node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootElement, data)

    function searchWithin(node, data) {
      if(!node) {
        return false;
      } else if (node.data === data) {
        return true;
      }

      if(data < node.data) {
        return searchWithin(node.left, data);
      } else return searchWithin(node.right, data);
    }
  }

  find(data ) {
    return searchWithin(this.rootElement, data)

    function searchWithin(node, data) {
      if(!node) {
        return null;
      } else if (node.data === data) {
        return node;
      }

      if(data < node.data) {
        return searchWithin(node.left, data);
      } else return searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.rootElement = removeNode(this.rootElement, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right
          return node;
        }
        
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minimumRightData = node.right;
        while(minimumRightData.left) {
          minimumRightData = minimumRightData.left;
        }

        node.data = minimumRightData.data;
        
        node.right = removeNode(node.right, minimumRightData.data);
        
        return node;
      }
    }
  }

  min() {
    if(!this.rootElement) {
      return;
    }

    let node = this.rootElement;
    while(node.left) {
      node = node.left
    }

    return node.data
  }

  max() {

    if(!this.rootElement) {
      return;
    }

    let node = this.rootElement;
    while(node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};