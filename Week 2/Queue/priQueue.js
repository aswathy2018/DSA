class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value, priority) {
        const newItem = { value, priority };

        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (priority < this.items[i].priority) {
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
        console.log(this.items.map(item => `${item.value} (P:${item.priority})`));
    }
}
