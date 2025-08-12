class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.table.length;
    }

    set(key, value) {
        let index = this.hash(key);
        this.table[index] = { key, value };
    }

    get(key) {
        let index = this.hash(key);
        return this.table[index];
    }

    has(key) {
        let index = this.hash(key);
        let slot = this.table[index];
        return slot !== undefined && slot.key === key;
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(this.table[i].key, this.table[i].value);
            }
        }
    }
}

let hashing = new HashTable(20);
let arr = ["apple", "banana", "apple", "orange", "banana", "grape"];
let duplicates = [];

for (let item of arr) {
    if (hashing.has(item)) {
        duplicates.push(item);
    } else {
        hashing.set(item, true);
    }
}

console.log(duplicates);
