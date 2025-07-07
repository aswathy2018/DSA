function merged(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return sorted(merged(left), merged(right))
}

function sorted(left, right){
    let sorte = []

    while(left.length && right.length){
        if(left[0]>=right[0]){
            sorte.push(left.shift())
        }else{
            sorte.push(right.shift())
        }
    } 
    return [...sorte, ...left, ...right]
}

console.log(merged([4,7,1,-3,5,-9,2,8,3]))