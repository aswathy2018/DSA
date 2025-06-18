function occ(arr,fre = {},index=0){
    if(index==arr.length){
        return fre
    }
    let key = arr[index]
    
    fre[key] = (fre[key] || 0)+1
    
    return occ(arr,fre,index+1)
}

console.log(occ([1,2,3,2,2,4,2,5]))