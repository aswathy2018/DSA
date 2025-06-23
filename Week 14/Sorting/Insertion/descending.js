/// In Descending

function descending(arr){
    for(let i=1 ; i<arr.length ; i++){
        let num = arr[i]
        let j = i-1

        while(j>=0 && arr[j]<num){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = num
    }
    return arr
}

console.log(descending([3,6,1,7,2,4,8,5]))