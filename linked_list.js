class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

LinkedList.prototype.insertAtBeginning = function (data) {
    // A newNode object is created with property data and next = null
    let newNode = new Node(data);
    // The pointer next is assigned head pointer so that both pointers now point at the same node.
   newNode.next = this.head;
    // As we are inserting at the beginning the head pointer needs to now point at the newNode. 

   this.head = newNode;
 return this.head;
}

// A list object is created with a property head, currently pointing at null
let list = new LinkedList();
LinkedList.insertAtBeginning("HOLA")
console.log(LinkedList);