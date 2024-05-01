class CreateNewNode {
  /**
   * Initializes a new instance of the CreateNewNode class with the given value.
   *
   * @param {any} value - The value to be used for the new node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.pre = null;
  }
}

class DoubleLinklist {
  /**
   * Initializes a new instance of the DoubleLinklist class with the given value.
   * @param {any} value - The value to be used for the new node.
   */
  constructor(value) {
    this.value = new CreateNewNode(value);
    this.head = this.value;
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Adds a new node with the given value to the end of the linked list.
   * @param {any} value - The value to be used for the new node.
   * @return {DoubleLinklist} - The updated linked list.
   */
  push(value) {
    const newNode = new CreateNewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.pre = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes the last element from the linked list and returns it.
   * @return {Object|undefined} - The removed element from the linked list, or undefined if the list is empty.
   */
  pop() {
    if (this.length == 0) return undefined;
    let temp = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.pre;
      this.tail.next = null;
      temp.pre = null;
    }
    this.length--;
    return temp;
  }

  /**
   * Adds a new node with the given value to the beginning of the linked list.
   * @param {any} value - The value to be used for the new node.
   * @return {DoubleLinklist} - The updated linked list.
   */
  unshift(value) {
    let newNode = new CreateNewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.pre = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length == 0) return undefined;
    let temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.pre = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const newDoubleLinklist = new DoubleLinklist(13);
newDoubleLinklist.push(5);
newDoubleLinklist.push(10);
newDoubleLinklist.pop();
newDoubleLinklist.unshift(99);
newDoubleLinklist.shift();
console.log(newDoubleLinklist);
