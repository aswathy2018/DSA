function twoSum(arr,target){
    let hash = {}

    for(let i=0 ; i<arr.length ; i++){
        let def = target - arr[i]

        if(def in hash){
            return [hash[def], i]
        }

        hash[arr[i]] = i
    }
}

console.log(twoSum([3,2,5,6,7,4,1,],10))