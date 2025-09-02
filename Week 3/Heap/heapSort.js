function heap(arr){
    let n=arr.length

    for(let i=Math.floor(n/2)-1 ; i>=0 ; i--){
        heapify(arr,i,n)
    }

    for(let i=n-1 ; i>0 ; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr,0,i)
    }
    return arr
}

function heapify(arr,index,size){
    let lar = index
    let left = 2*index+1
    let right = 2*index+2

    if(left<size && arr[lar]<arr[left]){
        lar = left
    }

    if(right<size && arr[lar]<arr[right]){
        lar = right
    }

    if(lar!==index){
        [arr[index], arr[lar]] = [arr[lar], arr[index]]
        heapify(arr,lar,size)
    }
}

console.log(heap([4,1,6,2,8,3,9]))