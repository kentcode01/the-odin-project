import { todo } from "../utils/todo";
import { project } from "../utils/project";

function sendTodo(projName, todo) {
    let projList = localStorage.getItem(projName);
    let newList = projList + ", " +  JSON.stringify(todo);
    localStorage.setItem(projName, newList);
}

export {sendTodo};