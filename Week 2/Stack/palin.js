function pal(name){
    let stack = []

    for(let i=0 ; i<name.length ; i++){
        stack.push(name[i])
    }
    
    for(let i=0 ; i<stack.length ; i++){
        
        if(name[i]!==stack.pop()){
            return false
        }
    }
    return true
}



console.log(pal("ASWATHY"))