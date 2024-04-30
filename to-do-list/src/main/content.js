import '../style.css';
import { addToProj, project } from '../utils/project';
import { helpers } from '../helper/functions';
import { todo, createTodoDivs, createTodoPrev } from '../utils/todo';

const content = (() => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const displayTodos = (project, todoObj) => {

        let currDiv = createTodoPrev(project, todoObj);
        contentDiv.appendChild(currDiv);
        helpers.addDeleteListeners(JSON.parse(localStorage.getItem(project.title)), todoObj);
        
    }

    const displayAllTodos = () => {
        clearContentDiv();
        for(let i = 0; i < localStorage.length; i++) {
            displayTodos(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    }

    const displayCurrProject = (project, todoObjList) => {
        clearContentDiv();

        for(let i = 0; i < todoObjList.length; i++) {
            let currObj = todoObjList[i];
            displayTodos(project, currObj);
        }
    }

    const clearContentDiv = () => {
        while(contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }


    return {contentDiv, displayTodos, displayCurrProject, displayAllTodos, clearContentDiv};
})();

export { content };