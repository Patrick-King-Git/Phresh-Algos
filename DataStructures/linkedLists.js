

class Node {
    constructor(value) {
      this.val = value;
      this.next = null;
      this.isVisited = false;
    }
  }

class LinkedList {
    constructor() {
      this.head   = null;
      this.length = 0;
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
            return;
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
        else{
            //set a variable to run through
            let runner = this.head;
            //once at the end exit
            while(runner.next != null){
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

    ReverseList(){
        if(this.isEmpty()) {
            console.log("empty list");
            return this;
        }
        //store 3 nodes at a time in order to reset the prev1 to the prev2 and still be able to use the .next functionality to traverse through the list
        let prev2 = this.head;
        let prev1 = this.head.next;
        let runner = this.head.next.next;
        //initialize the old head of list to point to nothing
        prev2.next = null;
        //loop through list 
        while (runner != null){
            //let middle node next in the list equal to its previous
            prev1.next = prev2;
            //increment by one for all 3 nodes
            prev2 = prev1;
            prev1 = runner;
            runner= runner.next;
        }
        //last reassignment
        prev1.next = prev2;
        //set the new head at the end of the previous list
        this.head  = prev1;
        //return reversed list
        return this;
    }

    DetectLoop() {
        //check if there are less than 2 nodes if so no loop is possible
        let runner = this.head;
        while(runner.next != null) {
            if (runner.next === true){
                console.log('there is a loop')
                return true;
            }
            runner.isVisited = true;
            runner = runner.next;
        }
        console.log('no loop detected')
        return false;
    }

    NthNodeFromEnd(n) {
        let runner = this.head;
        let fromTheEnd = this.head;
        for (let i =1; i<n;i++){
            if(runner === null){
                console.log("not long enough list to get that node from the end")
                return this;
            }
            runner = runner.next;
        }
        while(runner.next != null) {
            runner = runner.next;
            fromTheEnd = fromTheEnd.next;
        }
        console.log(fromTheEnd);
        return fromTheEnd;
    }

    RemoveDuplicates(){
        let runner = this.head;
        runner.isVisited = true;
        while(runner.next != null){
            if (runner.next.isVisited === true){
                runner.next == runner.next.next;
                pass;
            }
            runner = runner.next;
        }
        return this;
    }

}

//test cases
let myList = new LinkedList();
let a = new Node(10000000),
    b = new Node('hai'),
    c = new Node('why'),
    d = new Node('not'),
    e = new Node(18);
    f = new Node('sundaes')




myList.AddToend(a);
myList.AddToend(b);
myList.AddToend(c);
myList.AddToend(d);
myList.AddToend(e);
myList.AddToend(new Node('hai'))
// AddToend(b).AddToend(c).AddToend(d).AddToend(e).AddToend(f).AddToend(f);
myList.PrintNodes();
console.log('************')
myList.NthNodeFromEnd();



module.exports = LinkedList;