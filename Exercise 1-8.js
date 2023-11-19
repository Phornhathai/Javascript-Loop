// Exercise 1
// เขียนโปรแกรมที่หาเลขจำนวนเต็มที่มากที่สุด ระหว่างเลขจำนวนเต็มสองตัว

let numx = prompt("please input num1");
let numy = prompt("please input num1");

if(numx > numy){
    console.log(`${numx} is the maximum integer`);
}else{
    console.log(`${numy} is the maximum integer`);
}


// Exercise 2
// เขียนโปรแกรม JS โดยใช้ condition statement เพื่อหาเครื่องหมายของผลลัพธ์ที่ได้จากการคูณกันของตัวเลข 3 ตัว

let numz = prompt("Enter first number: ");
let numt = prompt("Enter second number: ");
let numm = prompt("Enter third number: ");

findProductSign(numz,numt,numm);
function findProductSign(numz, numt, numm){
    let result = numz * numt * numm;

    if(result > 0){
        console.log("The sign is +");
    }else if(result < 0){
        console.log("The sign is -");
    }else{
        console.log("The sign is 0");
    }
}

// ตัวอย่างตัวเลข : 3, -7, 2
// ผลลัพธ์ : The sign is -


// Exercise 3
// เขียนโปรแกรม JS โดยใช้ conditional statement เพื่อเรียงตัวเลข 3 ตัว จากค่ามากไปหาค่าน้อย

let num1 = prompt("num1 : ")
let num2 = prompt("num2 : ")
let num3 = prompt("num3 : ")

sortNumber(num1,num2,num3);
function sortNumber(num1, num2, num3) {
    let sortNum;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            sortNum = [num1, num2, num3];
        } else {
            sortNum = [num1, num3, num2];
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            sortNum = [num2, num1, num3]
        } else {
            sortNum = [num2, num3, num1]
        }
    }else{
        if(num1 >= num2){
            sortNum = [num3, num1, num2]
        }else{
            sortNum = [num3, num2, num1]
        }
    }
    console.log(`ผลลัพธ์ : ` + sortNum.join(','));
}

// ตัวอย่างตัวเลข : 0, -1, 4
// ผลลัพธ์ : 4, 0, -1

// Exercise 4
// เขียนโปรแกรม JS โดยใช้ conditional statement เพื่อหาตัวเลขที่มีค่ามากที่สุด จากตัวเลข 5 ตัว

let nums = [];
for (let i = 0; i < 5; i++) {
    nums[i] = prompt("Enter your num");
}
//ใช้ spread operator (...) เพื่อแปลงอาร์เรย์เป็นพารามิเตอร์แยก
let maxNum = Math.max(...nums);
console.log("ผลลัพธ์ : " + maxNum);


// ตัวอย่างตัวเลข : -5, -2, -6, 0, -1
// ผลลัพธ์ : 0

// Exercise 5
// เขียนโปรแกรม JS โดยใช้ loop เพื่อทำซ้ำกระบวนการตั้งแต่เลข 0 ถึง 15 โดยที่ในแต่ละรอบของการทำซ้ำ ใช้ทำการเช็กว่าตัวเลข ณ รอบนั้น เป็นเลขคู่ หรือ เลขคี่ 
//  และให้แสดงผลลัพธ์เป็นข้อความในหน้าจอ ดังนี้

for (let i = 0; i <= 15; i++) {
    if(i % 2 == 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}
// ตัวอย่าง ผลลัพธ์ :
// "0 is even"
// "1 is odd"
// "2 is even"
// .
// ..
// ...
// "15 is odd"

// Exercise 6
// เขียนโปรแกรม JS เพื่อแสดงผลลัพธ์ให้ออกมาตามรูปแบบในตัวอย่างข้างล่างนี้ โดยที่จะต้องใช้ nested loop ในการแสดงผลลัพธ์ในข้อนี้เท่านั้น

for (let i = 0; i <= 5; i++) {
    let star = '';
    for (let j = 0; j < i; j++) {
        star += '* ';
    }
    console.log(star)
}

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

// Exercise 7
// เขียนโปรแกรม JS เพื่อหาผลรวมของตัวเลขทั้งหมดตั้งแต่ 0 - 1000 แต่ตัวเลขนั้นจะต้องหาร 3 หรือ 5 ลงตัวเท่านั้น

let result = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        result += i;
    }
}

console.log(result);



// Exercise 8
// เขียนโปรแกรม JS เพื่อใช้ในการหาค่าเฉลี่ยของคะแนนสอบจากนักเรียนทั้งหมดที่กำหนดให้ในตาราง และจากนั้นให้ใช้คะแนนเฉลี่ยที่คำนวณมาได้ ใช้ในการคำนวณเกรดต่อไป

const pointX = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
}

let sum = 0;
for (const k in pointX) {
    sum += pointX[k];
}

    console.log(`Total points : ${sum}`);
    let len = Object.keys(pointX).length;
    let avg = sum / len;
    console.log(`Average of point is ${avg}`);


    calculateGrade(avg);
function calculateGrade(num){

    num = parseInt(num);
    if(num > 100){
        console.log("Grade : A");
    }else if(num > 90){
        console.log("Grade : B");
    }else if(num > 80){
        console.log("Grade : C");
    }else if(num > 70){
        console.log("Grade : D");
    }else if(num > 60){
        console.log("Grade : F");
    }
}