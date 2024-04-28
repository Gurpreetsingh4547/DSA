class CreateLinkList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  /**
   * Initializes a new instance of the LinkList class with the given value.
   * @param {any} value - The value to be used for the new node.
   */
  constructor(value) {
    const newNode = new CreateLinkList(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Push - Adds a new node with the given value to the end of the list
   *
   * @param {type} value - description of parameter
   * @return {type} this - description of return value
   */
  push(value) {
    const newNode = new CreateLinkList(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * A function that removes and returns the last node of the linked list.
   * @return {Object} The removed node from the linked list.
   */
  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.length = this.length - 1;
      for (let i = 0; i <= this.length; i++) {
        if (!temp.next) {
          this.tail = pre;
          this.tail.next = null;
          return temp;
        }
        pre = temp;
        temp = temp.next;
      }
    }
    return temp;
  }

  /**
   * A function that adds a new node to the beginning of the linked list.
   * @param {type} value - description of parameter
   * @return {type} this - description of return value
   */
  unShift(value) {
    const newNode = new CreateLinkList(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  /**
   * A function that removes and returns the first node of the linked list.
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length == 1) {
      this.tail = nul;
    }
    return this;
  }

  /**
   * Retrieves the element at the specified index from the list.
   * @param {number} index - The index of the element to retrieve.
   * @return {any} The element at the specified index, or undefined if the index is out of range.
   */
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  /**
   * Sets the value of the node at the specified index in the linked list.
   * @param {number} index - The index of the node to set the value of.
   * @param {any} value - The value to set for the node.
   */
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
    }
  }

  /**
   * Insert new item in linklist.
   * @param {type} index - description of parameter
   * @param {type} value - description of parameter
   * @return {type} description of return value
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return this.unShift(value);
    if (index == this.length) return this.push(value);
    let temp = this.get(index - 1);
    if (temp) {
      let newItem = new CreateLinkList(value);
      newItem.next = temp.next;
      temp.next = newItem;
      this.length++;
    }
  }

  /**
   * Removes the element at the specified index from the list.
   * @param {number} index - The index of the element to remove.
   * @return {any} The removed element, or undefined if the index is out of range.
   */
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length) return this.pop();
    let before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i <= this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const newLinkList = new LinkList(4);
newLinkList.push(5);
newLinkList.push(6);
newLinkList.push(7);
newLinkList.push(9);
// console.log(newLinkList);
// console.log(newLinkList.pop());
// newLinkList.unShift(33);

// newLinkList.shift(33);
// console.log(newLinkList);

// console.log(newLinkList.insert(1, 10));
// console.log(newLinkList.get(1));
// newLinkList.remove(1);
// console.log(newLinkList.get(1));
newLinkList.reverse();
console.log(newLinkList);
