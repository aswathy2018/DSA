function maximum(arr, index=0 , max = -Infinity){
    if(index==arr.length){
        return max
    }
    return maximum(arr,index+1,Math.max(max,arr[index]))
}

console.log(maximum([1,2,43,4,5]))