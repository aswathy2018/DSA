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