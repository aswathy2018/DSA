class Heap{
    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        while(index>0){
            let parent = Math.floor((index-1)/2)
            if(this.heap[parent]>this.heap[index]){
                break
            }

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]

            index = parent
        }
    }

    deleteRoot(){
        if(this.heap.length==0){
            return null
        }

        if(this.heap.length==1){
            return this.heap.pop()
        }

        let root = this.heap[0]
        this.heap[0] = this.heap.pop()

        this.heapify(0)
        return root
    }

    heapify(index){
        while(true){
            let lar = index
            let left = 2*index+1
            let right = 2*index+2

            if(left>this.heap.length && this.heap[lar]>this.heap[left]){
                lar = left
            }

            if(right>this.heap.length && this.heap[lar]>this.heap[right]){
                lar = right
            }

            if(lar==index){
                break
            }

            this.swap(lar,index)
            index = lar
        }
    }

    swap(index,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    print(){
        console.log(this.heap)
    }

}

let node = new Heap()

node.insert(2)
node.insert(4)
node.insert(6)
node.insert(5)
node.insert(8)
node.insert(1)

console.log("Before: ");
node.print()

console.log("After Deletion: ")
console.log(node.deleteRoot())