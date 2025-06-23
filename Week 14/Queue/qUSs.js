class Stack{
    constructor(){
        this.item = new Array()
    }
    
    isEmpty(){
        return this.item.length==0
    }
    
    push(value){
        this.item.push(value)
    }
    
    pop(){
        if(this.isEmpty()){
            return "Under flow"
        }
        return this.item.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            return null
        }
        
        return this.item[this.item.length-1]
    }
    
    display(){
        console.log(this.item)
    }
}


class Queue{
    constructor(){
        this.s1 = new Stack()
        this.s2 = new Stack()
    }
    
    enqueue(value){
        while(!this.s1.isEmpty()){
            this.s2.push(this.s1.pop())
        }
        this.s1.push(value)
        
        while(!this.s2.isEmpty()){
            this.s1.push(this.s2.pop())
        }
    }
    
    dequeue(){
        if(this.s1.isEmpty()){
            return "Under flow"
        }
        
        return this.s1.pop()
    }
    
    front(){
        if(this.s1.isEmpty()){
            return null
        }
        
        return this.s1.peek()
    }
    
    print(){
        this.s1.display()
    }
}


let queue = new Queue()

let i=1

while(i<=5){
    queue.enqueue(i)
    i++
}

queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.front())