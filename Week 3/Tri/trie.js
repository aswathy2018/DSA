class Node{
    constructor(){
        this.child = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root

        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new Node()
            }
            node = node.child[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root

        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node = node.child[char]
        }
        return node.isEnd
    }

    startWith(prefix){
        let node = this.root

        for(let char of prefix){
            if(!node.child[char]){
                return false
            }
            node = node.child[char]
        }
        return true
    }

    autocomplete(prefix){
        let node = this.root
        let res = []

        for(let char of prefix){
            if(!node.child[char]){
                return res
            }
            node = node.child[char]
        }
        this.collect(node,prefix,res)
        return res
    }

    collect(node, prefix, res){
        if(node.isEnd){
            res.push(prefix)
        }

        for(let char in node.child){
            this.collect(node.child[char], prefix+char, res)
        }
    }

    longestprefix(word){
        let node = this.root
        let long = ''
        let pref = ''

        for(let char of word){
            if(!node.child[char]){
                break
            }
            node = node.child[char]
            pref+=char
        }
        if(node.isEnd){
            long+=pref
        }
        return long
    }
}


let val = new Trie()

val.insert("app")
val.insert("apple")
val.insert("Orange")
val.insert("appleSyrup")

console.log("Search: ", val.search("apple"));
console.log("start with: ", val.startWith("app"));
console.log("auto: ", val.autocomplete("apple"));
console.log("longest: ", val.longestprefix("apple"));