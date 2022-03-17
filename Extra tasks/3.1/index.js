const arr = [-2,1,-3,4,-1,2,1,-5,4];
let curSum = 0,
    maxSum = 0,
    topArr;
arrayCur =[];
const topArray = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        curSum += arr[i];
        if(curSum > 0 && curSum >= 3  ){
            arrayCur.push(arr[i])
        }
        if(curSum < 3 ){
            curSum = 0;
            arrayCur = [];
        }
        maxSum = Math.max (curSum,maxSum)
        if(curSum >= maxSum){
            topArr = arrayCur
        }
    }
    return topArr
}


console.log(topArray(arr))




// const arr = [-2,1,-3,4,-1,2,1,-5,4];
//
// let maxSum = arr[0],
//     l = 0,
//     r = 0,
//     sum = 0,
//     min_sum = 0,
//     min_pos = -1;
// for (let i=0; i<arr.length; ++i) {
//     sum += arr[i];
//
//     let cur = sum - min_sum;
//     if (cur > maxSum) {
//         maxSum = cur;
//         l = min_pos + 1;
//         r = i;
//     }
//
//     if (sum < min_sum) {
//         min_sum = sum;
//         min_pos = i;
//     }
// }




