// afiseaza maximul din array
function printMax(arr){
    var max = arr[0]
    for(var i = 1 ; i <= arr.length;i++){
        if(max > arr[i]) {
            max = arr[i]
        }
    }
    console.log(max);
}

printMax([7 , 4 , 4 , 23 , 122 , 23232 , 3 , 2343343 , 4 , 0.2]);