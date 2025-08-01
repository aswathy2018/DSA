function rever(str){
    let queue = []
    for(let char of str){
        queue.unshift(char)
    }

    return queue.join('')
}

console.log(rever("Hii"));
