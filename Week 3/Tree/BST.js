class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root===null
    }

    insert(val){
        let node = new Node(val)

        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(node,this.root)
        }
    }

    insertNode(node,root){
        if(node.val<root.val){
            if(root.left==null){
                root.left = node
            }else{
                this.insertNode(node.root.left)
            }
        }else{
            if(root.right==null){
                root.right = node
            }else{
                this.insertNode(node,root.right)
            }
        }
    }

    search(val,root){
        if(root){
            if(root.val==val){
                return true
            }else if(val<root.val){
                this.search(val,root.left)
            }else{
                this.search(val,root.right)
            }
        }
        return false
    }

}