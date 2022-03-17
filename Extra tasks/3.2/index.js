const findSumActions = (arr) => {

    let maxSum = 0,
        big,
        curSum = 0,
        prom = arr[0];

    for (let i = 0, j = i + 1; j <= arr.length; j++, i++) {
        if (arr[i] >= arr[j]) {
            prom = arr[j]
            maxSum += curSum;
        }
        if (arr[i] <= arr[j]) {
            big = arr[j]
            curSum = big - prom
        }
        if(i===arr.length-1 && maxSum===0){
            return curSum
        }
    }
    return maxSum
}

console.log(findSumActions([7, 1, 5, 3, 6, 4]));
console.log(findSumActions([1,2,3,4,5]));
console.log(findSumActions([7,6,4,3,1]));