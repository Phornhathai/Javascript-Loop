const score = {
    tommy : 50,
    alice : 40,
    jan : 89,
    ball: 80,
    first : 30
}

let sum = 0;

for (const s in score) {
    console.log(`score of ${s} is ${score[s]}`);

    sum += score[s]

}

let avg = sum / Object.keys(score).length;
console.log(avg);