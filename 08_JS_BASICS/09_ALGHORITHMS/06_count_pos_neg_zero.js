// calculeaza cate elemente negative , pozitive sau nule exista si printeaza-le

function countNegPozZero(arr){
    var pos = 0;
    var neg = 0;
    var zero = 0;

    for(var i = 0 ; i <= arr.length - 1 ; i++){
        if(arr[i] < 0){
            neg++;
        }else if (arr > 0){
            pos++;
        }else {
            zero++;
        }
    }
    console.log("Array contine " + neg + " numere negative, " + pos + " numere pozitive si " + zero + " zerouri")
}

 countNegPozZero([ 0 , 0 , 0 , 0 , 0 , 1 , 3, 4 , 5 , 6, 7, -1 , -2 , -3 ,-4])