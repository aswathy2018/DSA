///    To find even numbers    ///



// function eve(arr){
//     let stack = []
//     let even = []

//     for(let i=0 ; i<arr.length ; i++){
//         stack.push(arr[i])
//     }

//     while(stack.length>0){
//         let val = stack.pop()

//         if(val%2==0){
//             even.push(val)
//         }
//     }

//     return even
// }

// console.log(eve([1,2,3,4,5,6,7]));



///    To delete it    ///

function eve(arr){
    let stack = []
    let even = []

    for(let i=0 ; i<arr.length ; i++){
        stack.push(arr[i])
    }

    while(stack.length>0){
        let val = stack.pop()

        if(val%2!==0){
            even.push(val)
        }
    }

    arr.length = 0
    while(even.length>0){
        arr.push(even.pop())
    }

    return arr
}

console.log(eve([1,2,3,4,5,6,7]));