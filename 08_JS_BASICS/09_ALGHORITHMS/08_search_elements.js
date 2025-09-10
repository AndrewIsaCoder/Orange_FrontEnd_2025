//  se da un element x si sa se verifice daca aexista in array

function findElement(arr, target) {
    if (arr.includes(target)) {
        return true;
    } else {
        return false;
    }
}

console.log(findElement([2, 4, 6, 9, 12], 5));  // false
console.log(findElement([2, 4, 6, 9, 12], 9)); // true
console.log(findElement([2, 4, 6, 9, 12], 9)); // true
console.log(findElement([2, 4, 6, 9, 12], 9)); // true
console.log(findElement([2, 4, 6, 9, 12], 9)); // true
