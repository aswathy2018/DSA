class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size == 0
    }
    
    getSize(){
        return this.size
    }
    
    prepend(value){
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    append(value){
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
        let cur = this.head
        let str = ''
        
        while(cur){
            str+=`${cur.value} `
            cur = cur.next
        }
        return str
        }
    }
}

let val = new LinkedList()
val.prepend(1)
val.prepend(6)
val.prepend(4)
val.prepend(9)

console.log(val.print())