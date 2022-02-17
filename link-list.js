const Node = function (data = null, next = null) {
  this.data = data;
  this.next = next;
};

const LinkList = function () {
  this.size = 0;
  this.head = null;
  this.tail = null;

  this.addLast = function (data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else if (this.head.next === null) {
      this.tail = new Node(data);
      this.head.next = this.tail;
    } else {
      const newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  };

  this.getAt = function (id) {
    let currentNode = this.head;
    for (let i = 0; i < id; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  this.remove = function (data) {
    let currentNode = this.head;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    for (let i = 0; i < this.size; i++) {
      const nextNode = currentNode.next;
      if (nextNode.data === data) {
        currentNode.next = nextNode.next;
        return;
      }
      currentNode = currentNode.next;
    }
  };
};

const list = new LinkList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);

list.remove(1);

console.log(list.getAt(0));
