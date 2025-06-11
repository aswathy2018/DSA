class Node{
    constructor(values){
        this.values = values
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size==0
    }
        
    getSize(){
        return this.size
    }
    
    
    
    prepend(values){
        let node = new Node(values)
        
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }
        
        let cur = this.head
        let str = ''
        
        while(cur){
            str+=`${cur.values} `
            cur = cur.next
        }
        return str.trim()
    }
    
    deleted(index){
        if(index<0 || index>this.size){
            console.log("Invalid index")
            return
        }
        if(index==0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0 ; i<index-1 ; i++){
                prev = prev.next
            }
            prev.next = prev.next.next
        }
        this.size--
    }
}


let value = new linkedList

value.prepend(2)
value.prepend(8)
value.prepend(3)
value.prepend(7)

value.deleted(2)
console.log(value.print())