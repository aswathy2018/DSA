function rev(arr){
    for(let i=arr.length-1 ; i>=0 ; i--){
        let temp = arr[i]
        arr[i] = arr[arr.length-1]
        arr[arr.length-1] = temp
    }
    return arr
}

console.log(rev([1,2,3,4,5,6,7]))