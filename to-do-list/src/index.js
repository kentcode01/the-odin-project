import { todo, createTodo } from "./utils/todo";
import { sidebar } from "./main/sidebar";
import { content } from "./main/content";
import { addListeners, sendTodo } from "./helper/functions";
import { project, createProj, addTodoTab, addToProj } from "./utils/project";
import './style.css';

const pageDiv = document.querySelector('#page');

pageDiv.appendChild(sidebar.sidebarNav);
pageDiv.appendChild(content.contentDiv);

let todayProj = project("Today");
createProj(todayProj);
let upcomingProj = project("Upcoming");
createProj(upcomingProj);

let task1 = todo("Wake up early", "Get up at 7am", "Today", "Yes", "Make coffee once up", "No", todayProj.title);
let task2 = todo("Submit Project", "Include everything in the module", "3 days", "Yes", "Be sure to share with team", "Yes", todayProj.title);
let task3 = todo("Cook Dinner", "Making seafood spaghetti today", "Today", "Yes", "Buy from Krogers", "Yes", upcomingProj.title);
addToProj(todayProj, task1);
addToProj(todayProj, task2);
addToProj(upcomingProj, task3);


