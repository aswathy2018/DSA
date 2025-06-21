class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
    }

    isEmpty(){
        return this.head===null
    }

    push(value){
        let node = new Node(value)

        node.next  = this.head
        this.head = node
    }

    pop(){
        if(this.isEmpty()){
            return "Under flow"
        }

        let temp = this.head
        this.head = this.head.next

        return temp.value
    }

    peek(){
        if(this.isEmpty()){
            return "Empty"
        }

        return this.head.value
    }

    display(){
        let curr = this.head

        while(curr){
            console.log(curr.value)

            curr = curr.next
        }
    }
}


let stack = new Stack()

let i=1
while(i<=6){
    stack.push(i)
    i++
}
console.log("Pushing: ")
stack.display()

console.log("Poping: ", stack.pop());
stack.display()

console.log("Peek: ", stack.peek());
stack.display()