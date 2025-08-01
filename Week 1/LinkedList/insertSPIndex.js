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

    /// Insert element at a specific index ///

    insert(value,index){
        if(index<0 || index>this.size){
            console.log("Invalid index")
        }
        if(index===0){
            this.prepend(value)
            return
        }
        let node = new Node(value)
        let curr = this.head

        for(let i=0 ; i<index-1 ; i++){
            curr = curr.next
        }

        node.next = curr.next
        curr.next = node
        this.size++
    }

    /// insert element After Value ///

    insertSp(value, targetValue){
        if(this.isEmpty()){
            console.log("List is empty")
        }

        let curr = this.head

        while(curr){
            if(targetValue===curr.value){
                let node = new Node(value)

                node.next = curr.next
                curr.next = node

                this.size++
                return
            }
            curr = curr.next
        }
        return "value not found"
    }
}

let val = new LinkedList()
val.prepend(1)
val.prepend(6)
val.prepend(4)
val.prepend(6)

val.insertSp(8,4)
console.log(val.print())