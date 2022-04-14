function add2ToArray(arr){

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] +2
    }
    return arr
}
console.log(add2ToArray([1,2,3]))
console.log(add2ToArray([10,20,30]))
console.log(add2ToArray([11,22,33]))