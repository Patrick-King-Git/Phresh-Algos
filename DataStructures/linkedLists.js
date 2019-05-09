module.export = {LinkedList};

class Node {
    constructor(value) {
      this.val = value;
      this.next = null
    }
  }
  class LinkedList {
    constructor() {
      this.head   = null;
    }

    PrintNodes() {
        if (this.isEmpty()) {
            console.log("no nodes")
        }
        else{
            let runner = this.head;
            console.log(runner.val);
            while(runner.next != null){
                console.log(runner.next.val);
                runner = runner.next;
            }
        }

    }
    isEmpty() {
        //if there is no start to list , it's empty
        return (this.head == null ? true: false);
    }
    isOneNode() {
        //if there is no .next to the first element , it's length=1
        return (this.head.next == null ? true: false);
    }

    AddToend(nodeToAdd) {
        //if empty set to head of list
        if (this.isEmpty()) {
            this.head = nodeToAdd;
        }
        else if(this.isOneNode()) {
            //if 1 long add to to the second
            this.head.next = nodeToAdd;
        }
        else{
            //set a variable to run through
            let runner = this.head;
            //once at the end exit
            while(runner.next != null && runner != null) {
                //increment
                runner = runner.next;
            }
            //add to the end
            runner.next = nodeToAdd;
        }
        return this;
    }
    AddToBeginning(nodeToAdd) {
        //if empty set as the front
        if (this.isEmpty()) {
            this.head = nodeToAdd;
        }
        else{
            //save the location of the current head of list
            let tempNode = this.head;
            //set the new head
            this.head =nodeToAdd;
            //point new head to the old head
            nodeToAdd.next = tempNode;
        }
        return this;
    }

    Delete(nodeToDelete) {
        //track if any nodes were deleted
        let wasDeleted = false;
        if (this.head == nodeToDelete){
            //if the first one is the node to be deleted call deleteAtHead
            this.DeleteAtHead();
            //change to true
            wasDeleted = true;
            return this;
        }
        else{
            //create a runner at the start of the list
            let runner = this.head;
            while(runner.next!=null) {
                //check node.next to be able to have the location
               if(runner.next == nodeToDelete) {
                   //change pointer to the node after the one to be deleted
                   runner.next = runner.next.next;
                   wasDeleted = true;
                   break;
               }
               runner = runner.next;
            }
        }
        //if nothing was deleted let console know
        if (wasDeleted == false){
            console.log("no Node in list");
        }
        return this;
    }

    DeleteAtHead(){
        //reset the start of the list at the 2nd node instead of the 1st
        this.head = this.head.next;
        return this;
    }

    Search(nodeToFind){
        if (this.isEmpty()){
            //nothing in list = not findable
            console.log("list empty");
            return this;
        }
        else if (this.head == nodeToFind){
            //check length = 1 edge case
            return this.head;
        }
        else{
            //create runner
            let runner = this.head;
            while(runner.next!=null) {
                //check each node for a match
               if(runner.next == nodeToFind) {
                   //return the node
                   return(runner.next);
               }
               //increment
               runner = runner.next;
            }
            //failure case
            return("not in list")
        }
    }
}

//test cases
let myList = new LinkedList();
let a = new Node(10000000),
    b = new Node('hai'),
    c = new Node('why'),
    d = new Node('not'),
    e = new Node(18);

// Reverse a linked list
// Detect loop in a linked list
// Return Nth node from the end in a linked list
// Remove duplicates from a linked list
