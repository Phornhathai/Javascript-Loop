const maximum = prompt("Please enter maximum number");
//Math.random คือ ค่าสุ่มตั้งแต่ 0-1 * maximum แล้วตัดด้วยทศนิยมออกด้วย Math.floor
//ถ้าอยากได้เลขหลักเดี่ยว ก็จะต้องคูณ 0 - 9
const targetNum = Math.floor(Math.random() * maximum); 


let guess = prompt("Enter your first answer")
//ถ้าตอบทั้งหมดกี่ครั้ง ต้อง = 1
//ถ้าตอบผิดกี่ครั้ง ต้อง = 0 
let attempts = 1;

console.log(targetNum, " << target num");

while (guess != targetNum){

    if(guess == "q"){
        break;
    }
    attempts += 1;
    if(guess > targetNum){
        guess = prompt("Too hight! Enter a new answer")
    }else if(guess < targetNum){
        guess = prompt("Too low! Enter a new answer")
    }
}

if ( guess == "q"){
    alert("OK you quit");
}else{
    alert(`You got it! It took you ${attempts} guesses`);

}
