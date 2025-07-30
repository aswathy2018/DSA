function quick(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i].length<pivot.length){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left), pivot, ...quick(right)]
}

console.log(quick(["Belwin", "Linda", "Sanitta", "Cila", "Alwin"]));