function fact(n){
    let val = 1
    for(let i=2 ; i<=n ; i++){
        val = val*i
    }
    return val
}
console.log(fact(6))