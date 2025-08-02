function rem(arr){
    let hash = {}
    let str = ''

    for(let char of arr){
        let low = char.toLowerCase()
        if(!hash[low]){
            str+=low
            hash[low] = true
        }
    }
    return str
}

console.log(rem("Malayalam"))