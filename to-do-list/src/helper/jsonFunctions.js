import { todo } from "../utils/todo";
import { project } from "../utils/project";

function sendTodo(project, todo) {
    let proj = JSON.parse(localStorage.getItem(project.title));
    proj.todos.push(todo);
    localStorage.setItem(project.title, JSON.stringify(proj));
}



export {sendTodo};