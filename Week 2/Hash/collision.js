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
        return total%this.size
    }

    set(key, val){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }

        for(let pair of this.table[index]){
            if(pair[0]==key){
                pair[1]==val
                return
            }
        }
        this.table[index].push([key,val])
    }

    get(key){
        let index = this.hash(key)

        if(this.table[index]){
            for(let pair of this.table[index]){
                if(pair[0]==key){
                    return pair[1]
                }
            }
        }
    }

    rem(key){
        let index = this.hash(key)

        if(this.table[index]){
            this.table[index] = this.table[index].filter(pair=>pair[0]!=key)
            if(this.table[index].length){
                this.table[index] = undefined
            }
        }
    }

    display(){
        for(let i=0 ; i<this.table.length ; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
                
            }
        }
    }
}

let hashing = new HashTable(10)

hashing.set("name", "Aswathy")
hashing.set("Age: ", "22")
hashing.set("Place: ", "Thrissur")

// hashing.display()

hashing.rem("name")
hashing.display()