function dup(arr){
    let hash = {}
    let res = []

    for(let i=0 ; i<arr.length ; i++){
        if(!hash[arr[i]]){
            hash[arr[i]] = true
            res.push(arr[i])
        }
    }

    return res
}

console.log(dup([1,2,3,4,2,6,5,8,4,1]))