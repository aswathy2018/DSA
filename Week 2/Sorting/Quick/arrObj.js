function quick(arr,key){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i][key]<pivot[key]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left,key), pivot, ...quick(right,key)]
}

let val = [
  { name: "Charlie", age: 22 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]

console.log(quick(val, "age"))