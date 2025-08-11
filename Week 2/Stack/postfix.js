function postf(num){
    let stack = []
    let value = num.split(" ")

    for(let val of value){
        if(!isNaN(val)){
            stack.push(Number(val))
        }else{
            let b = stack.pop()
            let a = stack.pop()
            let res

            switch(val){
                case '+': res = a+b
                break;

                case '-': res = a-b
                break;

                case '*': res = a*b
                break;

                case '/': res = a/b
                break
            }
            stack.push(res)
        }
    }
    return stack.pop()
}

console.log(postf('6 2 4 + 5 * 2 -'))