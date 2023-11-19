/* "new" - Add todo
    "list" - List all to do
    "delete" - remove specific todo
    "quit" - quit app*/

let input = prompt("What would you like to do");

const todos = [];

while( input != "quit"){
    if(input == "list"){
        console.log("*****");
        if(todos.length > 0){
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i} : ${todos[i]}`);              
            }
        }else{
            console.log("List is empty")
        }
    }else if(input == "new"){
        const newTodo = prompt("What is the new todo");
        if(newTodo != null){
            todos.push(newTodo);
            console.log(`${newTodo} added to the List`);
        }
    }else if(input == "delete"){
        //แปลง ข้อมูลที่รับจาก prompt มาเป็น number แต่จะทำให้ index = NaN คือเป็น number แต่ไม่สามารถเอาไปคำนวณได้
        const index = Number(prompt("please enter an index to delete"));
        //ถ้า index เป็นตัวเลขที่ถูกต้อง (ไม่ใช่ NaN) จะทำงานในบล็อกของ if
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1)
            console.log(`Ok deleted ${deleted}`);
        }
    }

    input = prompt("what would you like to do?")
}

console.log("quit app")