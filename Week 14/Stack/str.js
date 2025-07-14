function reverse(str){
    let stack = []

    for(let rev of str){
        stack.push(rev)
    }

    let rev = ''

    while(stack.length>0){
        rev+=stack.pop()
    }
    return rev
}

console.log(reverse("Hello"))