import '../style.css';
import { project } from '../utils/project';
import { todo, createTodoDivs } from '../utils/todo';

const content = (() => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const displayTodos = (project) => {
        clearContentDiv();

        let todoList = JSON.parse(localStorage.getItem(project.title)).todos;
        for(let t = 0; t < todoList.length; t++) {
            let currDiv = createTodoDivs(todoList[t]);
            contentDiv.appendChild(currDiv);
        }
    }

    // const displayAllTodos = (project) => {

    // }

    const clearContentDiv = () => {
        while(contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    return {contentDiv, displayTodos, clearContentDiv};
})();

export { content };