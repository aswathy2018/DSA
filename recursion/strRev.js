function rev(str,index=0){
    if(index==str.length){
        return ""
    }
    return rev(str,index+1)+str[index]
}

console.log(rev("asd"))