function selec(arr){
    let n = arr.length

    for(let i=0 ; i<n-1 ; i++){
        let index = i

        for(let j=i+1 ; j<n ; j++){
            if(arr[j]<arr[index]){
                index = j
            }
        }
        if(index!==i){
            [arr[i],arr[index]] = [arr[index],arr[i]]
        }
    }
    return arr
}


console.log(selec([34,73,12,56,98]))