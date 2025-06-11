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
                prev = prev.next
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

    print(){
        if(this.isEmpty()){
            console.log("This is list")
        }else{
            let cur = this.head
            let str = ''

            while(cur){
                str+=`${cur.value}`
                cur = cur.next
            }
            return str
        }
    }

    mid(){
        if(this.isEmpty()){
            console.log("List is empty")
        }
            let slow = this.head
            let fast = this.head

            while(fast&&fast.next){
                slow = slow.next
                fast = fast.next
            }
            return slow.data
    }
}

let val = new LinkedList

val.append(2)
val.append(7)
val.append(8)
val.append(1)
val.append(6)

console.log(val.mid())