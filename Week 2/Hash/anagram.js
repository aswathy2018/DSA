function anagram(s,t){
    if(s.length !== t.length){
        return false
    }
    
    let hash = {}

    for(let pair of s){
        hash[pair] = (hash[pair] || 0)+1
    }

    for(let val of t){
        if(!hash[val]){
            return false
        }else{
            hash[val]++
        }
    }
    return true
}

console.log(anagram("anagram", "nagaram"))