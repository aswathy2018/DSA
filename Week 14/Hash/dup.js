function dup(arr){
    let hash = {}
    let res = []

    for(let i=0 ; i<arr.length ; i++){
        if(hash[arr[i]]){
            if(hash[arr[i]]==1){
                res.push(arr[i])
            }
            hash[arr[i]]++
        }else{
            hash[arr[i]]=1
        }
    }
    return res
}

console.log(dup([1,2,3,4,2,6,3,5,8,4,1]))