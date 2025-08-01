class Queue{
    constructor(){
        this.item = new Array()
    }
    
    isEmpty(){
        return this.item.length==0
    }
    
    addFront(val){
        return this.item.unshift(val)
    }
    
    addRear(val){
        return this.item.push(val)
    }
    
    remFront(){
        if(this.isEmpty()){
            return "Under flow"
        }
        return this.item.shift()
    }
    
    remRear(){
        if(this.isEmpty()){
            return "UnderFlow"
        }
        return this.item.pop()
    }
    
    front(){
        if(this.isEmpty()){
            return "Empty"
        }
        
        return this.item[0]
    }
    
    rear(){
        if(this.isEmpty()){
            return "Empty"
        }
        
        return this.item[this.item.length-1]
    }
    
    display(){
        console.log(this.item)
    }
}

let arr = new Queue()

let i=1
let j=10
while(i<=3 && j<=13){
    arr.addFront(i)
    arr.addRear(j)
    i++
    j++
}

arr.display()

console.log("remFront: ", arr.remFront())
console.log("remRear: ", arr.remRear())
arr.display()
console.log("front: ", arr.front())
console.log("Rear: ", arr.rear())