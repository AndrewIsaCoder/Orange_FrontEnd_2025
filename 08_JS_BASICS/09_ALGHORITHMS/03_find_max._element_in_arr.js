// afiseaza maximul din array
function printMax(arr){
    var max = arr[0]
    for(var i = 1 ; i <= arr.length - 1;i++){
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    console.log(max);
}

printMax([1 , 4 , 4 , 23 , 122 , 23232 , 1 , 2343343 , 1]);