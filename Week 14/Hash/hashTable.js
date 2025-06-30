class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0 ; i<key.length ; i++){
            total+=key.charCodeAt(i)
        }

        let val = total%this.size
        return val
    }

    set(key,value){
        let index = this.hash(key)
        this.table[index] = {key,value}
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }

    display(){
        for(let i=0 ; i<this.table.length ; i++){
            if(this.table[i]){
                console.log(this.table[i].key, this.table[i].value)
            }
        }
    }
}

let hashing = new HashTable(10)

hashing.set("name: ", "Aswathy")
hashing.set("Age: ", "22")
hashing.set("Place: ", "Thrissur")

// hashing.remove("name: ")
// hashing.display()

console.log(hashing.get("name: "));

