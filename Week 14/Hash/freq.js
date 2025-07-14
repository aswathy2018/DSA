function freq(arr){
    let map = {}

    for(let pair of arr){
        map[pair] = (map[pair] || 0)+1
    }

    let sorting = [...new Set(Object.values(map))].sort((a,b)=>a-b)

    if(sorting.length<2){
        return null
    }

    let val = sorting[1]
    let res = []

    for(let temp in map){
        if(map[temp]===val){
            res.push(Number(temp))
        }
    }
    return res
}

console.log(freq([4, 5, 6, 5, 4, 3, 2, 2, 2]))