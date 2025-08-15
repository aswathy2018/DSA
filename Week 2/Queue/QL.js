class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class QL{
    constructor(){
        this.head = null
        this.rear = null
    }
    
    isEmpty(){
        return this.head==null
    }
    
    enqueue(val){
        let node = new Node(val)
        
        if(this.isEmpty()){
            this.head = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
    }
    
    dequeue(){
        if(!this.isEmpty()){
            let temp = this.head
            this.head = this.head.next
            
            if(this.head==null){
                this.rear = null
            }
            return temp.val
        }else{
            return "Under flow"
        }
    }
    
    peek(){
        if(this.isEmpty()){
            return "empty"
        }
        return this.head.val
    }
    
    print(){
        let curr = this.head
        
        while(curr){
            console.log(curr.val)
            curr = curr.next
        }
    }
}

 let queue = new QL();
    let i = 0;
    while (i <= 5) {
    queue.enqueue(i);
    i++;
    }
    
    queue.print()
    