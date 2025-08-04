function pal(name){
    let queue = []

    for(let i=0 ; i<name.length ; i++){
        queue.push(name[i])
    }
    
    for(let i=queue.length-1 ; i>=0 ; i--){
        
        if(name[i]!==queue.shift()){
            return false
        }
    }
    return true
}



console.log(pal("aswathy"))