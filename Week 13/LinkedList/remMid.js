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
        return this.size==0
    }
    
    getSize(){
        return this.size
    }
    
    append(value){
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            
            while(prev.next){
                prev=prev.next
            }
            prev.next = node
        }
        this.size++
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

    rem(){
        if(this.isEmpty()) return "List is empty"
        
        if(this.size===1){
            this.head = null
            this.size--
            return
        }
        
        let slow = this.head
        let fast = this.head
        let prev = null
        
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        
        prev.next = slow.next
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let prev = this.head
            let str = ''
            
            while(prev){
                str+=`${prev.value}`
                prev = prev.next
            }
            return str.trim()
        }
    }
}



let values = new LinkedList

values.append(9)
values.append(3)
values.append(4)
values.append(2)
values.append(1)

values.rem()

console.log(values.print())