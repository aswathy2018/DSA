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
    if(index<0 &&  index>this.size){
        console.log("Invalide index")
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

for(let i=1 ; i<=5 ; i++){
    value.prepend(i)
}

value.deleted(3)
console.log(value.print())