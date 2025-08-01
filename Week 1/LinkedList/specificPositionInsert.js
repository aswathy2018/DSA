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

    getsize(){
        return this.size
    }

    prepend(){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(){
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
            console.log("The list is empty")
        }else{
            let cur = this.head
            let strings = ''

            while(cur){
                strings+=`${cur.value}`
                cur = cur.next
            }
            return strings.trim()
        }
    }
}