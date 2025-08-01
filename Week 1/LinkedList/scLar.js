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
    
    sec(){
        if(this.size<2) return "List is too small"
        
        let lar = -Infinity
        let sec = -Infinity
        let cur = this.head
        
        while(cur){
            if(cur.value>lar){
            sec = lar
            lar = cur.value
        }else if(cur.value>sec && cur.value!==lar){
            sec = cur.value
        }
        cur = cur.next
        }
        return sec === -Infinity?"No sec":sec
    }
    
    lar(){
        if(this.isEmpty()) return "Empty"
        
        let lar = -Infinity
        let cur = this.head
        
        while(cur){
            if(cur.value>lar){
                lar = cur.value
            }
            cur= cur.next
        }
        return lar
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

console.log(values.sec())