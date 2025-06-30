// function binary(arr, target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,left,right){
//     if(left>right){
//         return -1
//     }

//     let mid = Math.floor((left+right)/2)

//     if(target===arr[mid]){
//         return mid
//     }else if(target<arr[mid]){
//         return search(arr,target,left,mid-1)
//     }else{
//         return search(arr,target,mid+1,right)
//     }
// }

// console.log(binary([1,2,3,4,5,6,6,7],4))


function binarySearch(array, target, left = 0, right = array.length - 1) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
        return mid;
    }

    if (target < array[mid]) {
        return binarySearch(array, target, left, mid - 1);
    }

    return binarySearch(array, target, mid + 1, right);
}



console.log(binarySearch([1,2,3,4,5,6,7],4))