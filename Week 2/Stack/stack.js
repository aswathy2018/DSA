class Stack{
    constructor(){
        this.item = new Array()
    }

    isEmpty(){
        return this.item.length===0
    }

    push(value){
        this.item.push(value)
    }

    pop(){
        if(this.isEmpty()){
            return "Under Flow"
        }
        return this.item.pop()
    }

    peek(){
        if(!this.isEmpty()){
            return this.item[this.item.length-1]
        }
        return "Empty"
    }

    display(){
        console.log(this.item)
    }
}

let stack = new Stack

let i=1
while(i<=6){
    stack.push(i)
    i++
}

console.log("Pushing: ")
stack.display()

console.log("Poping: ", stack.pop());
stack.display()

console.log("Peek: ", stack.peek())
stack.display()