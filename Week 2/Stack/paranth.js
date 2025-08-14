function paranth(s){
    let stack = []
    let sign = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }

    for(let char of s){
        if(char==='{' || char==='[' || char==='('){
            stack.push(char)
        }else{
            if(stack.length===0 || stack[stack.length-1] !==sign[char]){
                return false
            }
            stack.pop()
        }
    }
    return stack.length==0
}

console.log(paranth("()"))