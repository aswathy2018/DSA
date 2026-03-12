class Node{
    constructor(val){
        this.val = val
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

    prepend(val){
        let node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(val){
        let node = new Node(val)

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

    removeMiddle(count){
    if(this.isEmpty() || count <= 0 || count >= this.size) return
    
    let start = Math.floor((this.size - count) / 2)
    
    let prev = null
    let curr = this.head
    
    // Move to start position
    for(let i = 0; i < start; i++){
        prev = curr
        curr = curr.next
    }
    
    // Skip 'count' nodes
    for(let i = 0; i < count; i++){
        curr = curr.next
        this.size--
    }
    
    // Reconnect
    if(prev){
        prev.next = curr
    }else{
        this.head = curr
    }
}

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let str = ''
            while(curr){
                str+=`${curr.val} `
                curr = curr.next
            }
            return str
        }
    }
}

let val = new LinkedList()

let i = 1
while(i<=10){
    val.prepend(i)
    i++
}

console.log(val.print())

val.removeMiddle(6)
console.log("After deletion: ", val.print())