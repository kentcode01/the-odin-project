import { todo, createTodo } from "./utils/todo";
import { sidebar } from "./main/sidebar";
import { content } from "./main/content";
import './style.css';

const pageDiv = document.querySelector('#page');
pageDiv.classList.add('page');
pageDiv.appendChild(sidebar());
pageDiv.appendChild(content());