/*
In app.js, import the TodoList class from the todo.js module.

Create an instance of the TodoList class.

Add a few tasks, mark some as complete, and list all tasks.

Run app.js and verify that the todo list operations are working correctly.
*/

import { TodoList } from './todo.js'

const task = new TodoList();

let taskOne = task.addTask('dothing');
task.markComplete(taskOne);

let taskTwo = task.addTask('dothingtwo');
task.markComplete(taskTwo);

task.listAllTasks()