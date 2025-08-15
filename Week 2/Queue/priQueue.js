class PriorityQueue {
    constructor() {
        this.items = [];
    }

    isEmpty(){
        return this.items.length===0
    }

    enqueue(value, pri) {
        const newItem = { value, pri };

        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (pri < this.items[i].pri) {
                this.items.splice(i, 0, newItem);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(newItem);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.map(item => `${item.value} (P:${item.pri})`));
    }
}


let prio = new PriorityQueue(6)

prio.enqueue(1,2)
prio.enqueue(2,3)
prio.enqueue(3,4)
prio.enqueue(4,5)
prio.enqueue(5,1)

prio.display()

console.log("Del: ", prio.dequeue())
console.log("Front: ", queue.front())