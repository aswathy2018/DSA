function merge(arr,key){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return search(merge(left,key),merge(right,key),key)
}

function search(left,right,key){
    let mer = []

    while(left.length && right.length){
        if(left[0][key]<right[0][key]){
            mer.push(left.shift()) 
        }else{
            mer.push(right.shift())
        }
    }

    return [...mer, ...left, ...right]
}


let val = [
  { name: "Charlie", age: 22 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]

console.log(merge(val, "name"))