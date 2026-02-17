/*
In todo.js, define an ES6 module that exports a TodoList class.

The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

Export the TodoList class.
*/

class TodoList  {
    constructor() {
        this.arr = [];
    }
    addTask(task){
        let obj = {
           text: task,
           done: false
        }
        this.arr.push(obj);
        return obj;
    }
    markComplete(task){

        this.arr.find(({text})=>{
            
            if (text === task.text) {
                task.done = true;
            }
        })
        
    }
    listAllTasks(){
        this.arr.forEach(obj=>{
            console.log(`text ${obj.text}, complete: ${obj.done}`);
            
        })
    }
}

export { TodoList };
