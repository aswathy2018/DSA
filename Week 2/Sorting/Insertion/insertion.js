//In ascending


function insertion(arr){
    for(let i=1 ; i<arr.length ; i++){
        let num = arr[i]
        let j = i-1

        while(j>=0 && arr[j]>num){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = num
    }
    return arr
}

console.log(insertion([4,7,3,6,1,9,2,5,8]))