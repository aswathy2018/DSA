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
        if(this.isEmpty()){
            return null
        }
        
        return this.item[0]
    }
    
    display(){
        console.log(this.item)
    }
}


class Stack{
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }
    
    push(value){
        while(!this.q1.isEmpty()){
            this.q2.enqueue(this.q1.dequeue())
        }
        this.q1.enqueue(value)
        
        while(!this.q2.isEmpty()){
            this.q1.enqueue(this.q2.dequeue())
        }
    }
    
    pop(){
        if(this.q1.isEmpty()){
            return "Under Flow"
        }
        return this.q1.dequeue()
    }
    
    peek(){
        if(this.q1.isEmpty()){
            return null
        }
        
        return this.q1.front()
    }
    
    print(){
        return this.q1.display()
    }
}

let stack = new Stack()

let i=1
while(i<=6){
    stack.push(i)
    i++
}

stack.print()

console.log("Ddd: ", stack.pop())

console.log("Aaaaaa: ", stack.peek())