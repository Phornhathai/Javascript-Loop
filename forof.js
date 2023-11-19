// const num = [[2,4,5] , [3,4,2] , [5,2,1]]

// for (const a of num) {
//     console.log(a);
//     for (const b of a) {
//         console.log(b);
//     }
// }

const numbers = [1,2,3,4,5,6,7,8,9];
let result = [];

for (const num of numbers) {
    result = Math.pow(num , 2)
    console.log(result);
}