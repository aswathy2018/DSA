class Queue{
    constructor(){
        this.item = new Array()
    }

    isEmpty(){
        return this.item.length===0
    }

    enqueue(value){
        this.item.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Under flow"
        }
        return this.item.shift()
    }

    front(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }

    display(){
        console.log(this.item)
    }
}


let queue = new Queue()

console.log("Before adding: ", queue.isEmpty());
queue.display()

let i=1;
while(i<=6){
    queue.enqueue(i)
    i++
}

console.log("After adding: ");
queue.display()

console.log("Deleting: ", queue.dequeue());
queue.display()

console.log("Fetching first element: ", queue.front());
queue.display()