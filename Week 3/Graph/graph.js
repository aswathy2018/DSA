class Graph{
    constructor(){
        this.graph = {}
    }

    add(v){
        if(!this.graph[v]){
            this.graph[v] = []
        }
    }

    addE(v,w){
        if(!this.graph[v]){
            this.add(v)
        }

        if(!this.graph[w]){
            this.add(w)
        }

        this.graph[v].push(w)
        this.graph[w].push(v)
    }

    bfs(start){
        let queue = [start]
        let visited = [start]
        let res = []

        while(queue.length){
            let curr = queue.shift()

            res.push(curr)

            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    queue.push(n)
                    visited.push(n)
                }
            })
        }
        return res
    }

    dfs(start){
        let stack = [start]
        let visited = [start]
        let res = []

        while(stack.length){
            let curr = stack.pop()
            res.push(curr)

            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    stack.push(n)
                    visited.push(n)
                }
            })
        }
        return res
    }
}


let g = new Graph()

g.addE("a", "b")
g.addE("c", "d")
g.addE("e", "f")
g.addE("g", "h")

console.log("Values: ", g.graph)
console.log("BFS: ", g.bfs("a"))
console.log("DFS: ",g.dfs("c"))