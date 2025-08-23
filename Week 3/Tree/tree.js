class Node{
    constructor(value){
        this.value = value
        this.child = []
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root==null
    }

    addChild(parentV, childV){
        const node = new Node(childV)

        if(this.isEmpty()){
            this.root = node
            return
        }

        const parent = this.find(this.root, parentV)

        if(parent){
            parent.child.push(node)
        }else{
            console.log("Parent not found")
        }
    }
    
    find(node, val){
        if(node.val==val){
            return node
        }

        for(let c of node.child){
            const found = this.found(c, val)

            if(found){
                return found
            }
        }
        return null
    }
}