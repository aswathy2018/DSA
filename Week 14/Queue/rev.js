function rev(arr){

    let stack = []
    let queue = []

    for(let i=0 ; i<arr.length ; i++){
        stack.push(arr[i])
    }

    while(stack.length>0){
        queue.push(stack.pop())
    }

    for(let i=0 ; i<arr.length ; i++){
        arr[i] = queue.shift()
    }

    return arr
}

console.log(rev([1,2,3,4,5,6]))