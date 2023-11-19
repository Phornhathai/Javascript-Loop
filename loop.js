// for (let i = 1; i <= 6; i++) {
//     console.log(`Da ba dee da ba daa`);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);

// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// let str = "LOL"

// for (let i = 0; i < 5; i++) {
//     console.log("outer", i);

//     for (let j = 0; j < str.length; j++) {
//         console.log("inner" , str[j]);

//     }

// }

let listOfAnimal = [["Aardvark", "Albatross", "Alligator"],
["Alpaca", "Ant", "Anteater"],
["Antelope", "Ape", "Armadillo"]]

for (let i = 0; i < listOfAnimal.length; i++) {
    // console.log(listOfAnimal[i]);
    for (let j = 0; j < listOfAnimal[i].length; j++) {
        console.log(listOfAnimal[i][j]);
        
        //listOfAnimal [0][0]
        //listOfAnimal [0][1]
        //listOfAnimal [0][2]

        //listOfAnimal [1][0]
        //listOfAnimal [1][1]
        //listOfAnimal [1][2]

        //listOfAnimal [2][0]
        //listOfAnimal [2][1]
        //listOfAnimal [2][2]
    }
    
}


