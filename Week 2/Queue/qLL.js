class Node{
    constructor(value){
        this.value = value
        this.size = null
    }
}

class Queue{
    constructor(){
        this.head = null
    }

    isEmpty(){
        return this.head===null
    }

    enqueue(value){
        let node = new Node(value)

        node.next = this.head
        this.head = node
    }

    dequeue(){
        if(this.isEmpty()){
            return "Under flow"
        }

        let temp = this.head
        this.head = this.head.next

        return temp.value
    }

    front(){
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


let val = new Queue()
let i=1
while(i<=6){
    val.enqueue(i)
    i++
}

val.display()

console.log("Front: ", val.front());

console.log("Dell: ", val.dequeue());

val.display()

