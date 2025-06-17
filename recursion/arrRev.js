function rev(arr,revv = [] , index = arr.length-1){
    if(index<0){
        return revv
    }
    revv.push(arr[index])
    return rev(arr,revv,index-1)
}

console.log(rev([1,2,3]))