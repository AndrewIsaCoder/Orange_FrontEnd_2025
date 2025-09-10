// se da un array cu numere pozitive si negative sa se modifice array astfel incat numerle negative sa fie pozitive
function positiveNumbers(arr) {
    let allPositive = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] * -1;
            allPositive = false;
        }
    }
    if (allPositive) {
        return "All numbers are positive!";
    }
    return arr;
}

console.log(positiveNumbers([-1, -2, 3]));