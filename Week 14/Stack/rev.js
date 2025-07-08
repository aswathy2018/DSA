function reverse(arr){
    let stack = []

    for(let i=0 ; i<arr.length ; i++){
        stack.push(arr[i])
    }

    for(let i=0 ; i<arr.length ; i++){
        arr[i] = stack.pop()
    }
    return arr
}

console.log(reverse([1,2,3,4,5,6]))