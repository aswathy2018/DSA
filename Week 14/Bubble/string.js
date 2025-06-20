function bubble(str){
    for(let i=0 ; i<str.length-1 ; i++){
        for(let j=i+1 ; j<str.length ; j++){
            if(str[i].length>=str[j].length){
                [str[i],str[j]] = [str[j],str[i]]
            }
        }
    }
    return str
}

console.log(bubble(["aswathy", "nandu", "ashika", "Dev"]))