import { format, parse } from "date-fns";
import { content } from "./content";
import { createProj, project } from "../utils/project";
import { todo } from "../utils/todo";

const modal = (() => {

    const editModalDiv = document.createElement('div');
    const projModalDiv = document.createElement('div');
    const deleteModalDiv = document.createElement('div');

    const createEditModal = () => {

        let formDiv = document.createElement('div');
        let titleLegend = document.createElement('legend');
        let titleInput = document.createElement('input');
        let formElement = document.createElement('form');
        let descriptLegend = document.createElement('legend');
        let descriptInput = document.createElement('input');
        let dateLegend = document.createElement('legend');
        let dateInput = document.createElement('input');
        let priorLegend = document.createElement('legend');
        let priorSelect = document.createElement('select');
        let priorOptOne = document.createElement('option');
        let priorOptTwo = document.createElement('option');
        let priorOptThree = document.createElement('option');
        let priorOptFour = document.createElement('option');

        priorSelect.appendChild(priorOptOne);
        priorSelect.appendChild(priorOptTwo);
        priorSelect.appendChild(priorOptThree);
        priorSelect.appendChild(priorOptFour);

        priorOptOne.setAttribute('value', 'high');
        priorOptTwo.setAttribute('value', 'medium');
        priorOptThree.setAttribute('value', 'low');
        priorOptFour.setAttribute('value', '---');

        priorOptOne.textContent = 'High';
        priorOptTwo.textContent = 'Medium';
        priorOptThree.textContent = 'Low';
        priorOptFour.textContent = '---';

        let notesLegend = document.createElement('legend');
        let notesInput = document.createElement('input');
        let submitBtn = document.createElement('button');
        let closeBtn = document.createElement('button');

        titleInput.setAttribute('id', 'title');
        descriptLegend.setAttribute('for', 'description');
        descriptInput.setAttribute('id', 'description');
        descriptInput.setAttribute('type', 'text');
        dateLegend.setAttribute('for', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('type', 'date');
        
        titleLegend.setAttribute('for', 'title');
        priorLegend.setAttribute('for', 'priority');
        priorSelect.setAttribute('id', 'priority');
        priorSelect.setAttribute('name', 'priority');
        notesLegend.setAttribute('for', 'notes');
        notesInput.setAttribute('type', 'text');
        notesInput.setAttribute('id', 'notes');

        submitBtn.setAttribute('type', 'submit')
        closeBtn.classList.add('close-btn');

        titleLegend.textContent = 'Title';
        descriptLegend.textContent = 'Description: ';
        dateLegend.textContent = 'Date: ';
        priorLegend.textContent = 'Priority: ';
        notesLegend.textContent = 'Notes: ';
        submitBtn.textContent = 'Save Changes';
        closeBtn.textContent = 'X';

        editModalDiv.appendChild(formDiv);
        formDiv.appendChild(formElement);

        formElement.appendChild(closeBtn);
        formElement.appendChild(titleLegend);
        formElement.appendChild(titleInput);
        formElement.appendChild(descriptLegend);
        formElement.appendChild(descriptInput);
        formElement.appendChild(dateLegend);
        formElement.appendChild(dateInput);
        formElement.appendChild(priorLegend);
        formElement.appendChild(priorSelect);
        formElement.appendChild(notesLegend);
        formElement.appendChild(notesInput);
        formElement.appendChild(submitBtn);

        submitBtn.classList.add('submit-btn');
        editModalDiv.classList.add('modal');
        editModalDiv.classList.add('hidden');
        formDiv.classList.add('modal-form-div');
        formElement.classList.add('form');
    }


    const addSubmitListener = () => {
        
        let submitBtn = editModalDiv.querySelector('button[type=submit]');
       
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let projName = editModalDiv.id;
            let formElement = editModalDiv.getElementsByTagName('form')[0];

            if(editModalDiv.classList.contains('create-todo')) {
                
                
                let todoObj = todo('','','','','',false, content.contentDiv.id);
                let objList = JSON.parse(localStorage.getItem(`${projName}`)).todos;
                let index = objList.length;
                
                todoObj.title = formElement.querySelector('#title').value;
                todoObj.description = formElement.querySelector('#description').value;
                todoObj.dueDate = format(parse(formElement.querySelector('#date').value, 'yyyy-mm-dd', new Date()), 'mm/dd/yyyy');
                todoObj.priority = formElement.querySelector('#priority').value;
                todoObj.notes = formElement.querySelector('#notes').value;
                objList.splice(index, 1, todoObj);
                let myProj = JSON.parse(localStorage.getItem(`${projName}`));
                myProj.todos = objList;
                localStorage.setItem(projName, JSON.stringify(myProj));
                editModalDiv.classList.remove('create-todo');

            } else {
                
                let todoName = editModalDiv.getElementsByTagName('form')[0].id;
                let index = -1;
                let todoObj;
                let objList = JSON.parse(localStorage.getItem(`${projName}`)).todos;
                for(let i = 0; i < objList.length; i++) {
                    if(objList[i].title === todoName) {
                        todoObj = objList[i];
                        index = i;
                        break;
                    }
                }
                
                
                todoObj.title = formElement.querySelector('#title').value;
                todoObj.description = formElement.querySelector('#description').value;
                todoObj.dueDate = format(parse(formElement.querySelector('#date').value, 'yyyy-mm-dd', new Date()), 'mm/dd/yyyy');
                todoObj.priority = formElement.querySelector('#priority').value;
                todoObj.notes = formElement.querySelector('#notes').value;

                let originTodoList = JSON.parse(localStorage.getItem(todoObj.projectTitle)).todos;
                let originIndex = originTodoList.findIndex(x => x.title === todoName);
                
                if(projName === 'Today') {
                    originTodoList.splice(originIndex, 1, todoObj);
                    let originProj = JSON.parse(localStorage.getItem(todoObj.projectTitle));
                    originProj.todos = originTodoList;
                    localStorage.setItem(todoObj.projectTitle, JSON.stringify(originProj));
                }
                
                objList.splice(index, 1, todoObj);
                let myProj = JSON.parse(localStorage.getItem(`${projName}`));
                myProj.todos = objList;
                localStorage.setItem(projName, JSON.stringify(myProj));
                
                
            }
                
            modal.editModalDiv.classList.add('hidden');
            modal.editModalDiv.removeAttribute('id');
            editModalDiv.getElementsByTagName('form')[0].removeAttribute('id');
            
            content.displayCurrProject(JSON.parse(localStorage.getItem(projName)), JSON.parse(localStorage.getItem(projName)).todos);
        });
    }

    const closeModalListener = (modaldiv) => {
        let closeBtn = modaldiv.getElementsByClassName('close-btn')[0];

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(modaldiv.classList.contains('create-todo')) modaldiv.classList.remove('create-todo');
            modaldiv.classList.add('hidden');
        });
    }

    const createProjModal = () => {
        
        let formDiv = document.createElement('div');
        let formElement = document.createElement('form');
        let titleLegend = document.createElement('legend');
        let titleInput = document.createElement('input');
        let submitBtn = document.createElement('button');
        let closeBtn = document.createElement('button');

        titleLegend.setAttribute('for', 'proj-form-title');
        titleInput.setAttribute('id', 'proj-form-title');
        submitBtn.setAttribute('id', 'proj-submit-btn');

        titleLegend.textContent = 'Project Title';
        submitBtn.textContent = 'Add Project';
        closeBtn.textContent = 'X';

        projModalDiv.appendChild(formDiv);
        formDiv.appendChild(formElement);
        formElement.appendChild(closeBtn);
        formElement.appendChild(titleLegend);
        formElement.appendChild(titleInput);
        formElement.appendChild(submitBtn);

        projModalDiv.classList.add('modal');
        projModalDiv.classList.add('hidden');

        closeBtn.classList.add('close-btn');
        submitBtn.classList.add('submit-btn');
        formDiv.classList.add('modal-form-div');
        formElement.classList.add('form');

        closeModalListener(projModalDiv);
        makeProjListener();
    }


    const addProjectListener = () => {
        projModalDiv.classList.remove('hidden');
    }

    const makeProjListener = () => {
        
        let submitBtn = projModalDiv.getElementsByClassName('submit-btn')[0];

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let formElement = projModalDiv.getElementsByTagName('form')[0];
            let newProj = formElement.querySelector('#proj-form-title').value;
            createProj(project(newProj));
            projModalDiv.classList.add('hidden');
        });
    }

    const deleteProjModal = () => {
        
        let formDiv = document.createElement('div');
        let formElement = document.createElement('form');
        let deleteProjBtn = document.createElement('button');
        let formText = document.createElement('p');
        let closeBtn = document.createElement('button');

        deleteProjBtn.textContent = 'Delete';

        deleteModalDiv.appendChild(formDiv);
        
        formDiv.appendChild(formElement);
        formElement.appendChild(closeBtn);
        formElement.appendChild(formText);
        formElement.appendChild(deleteProjBtn);

        deleteProjBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let projName = editModalDiv.id;
            if(JSON.parse(localStorage.getItem(projName)).defaultTab === false) {
                localStorage.removeItem(projName);
                let removeTab = document.getElementsByClassName('sidebar')[0].querySelector(`#${projName}`);
                removeTab.parentNode.removeChild(removeTab);
                content.displayCurrProject(JSON.parse(localStorage.getItem('Today')), JSON.parse(localStorage.getItem('Today')).todos);
            } else {
                alert('A default tab cannot be removed');
                content.displayCurrProject(JSON.parse(localStorage.getItem(projName)), JSON.parse(localStorage.getItem(projName)).todos);
            }
            
            deleteModalDiv.classList.add('hidden');
        })

        closeBtn.textContent = 'X';

        deleteModalDiv.classList.add('modal');
        deleteModalDiv.classList.add('hidden');
        closeBtn.classList.add('close-btn');
        formDiv.classList.add('modal-form-div');
        formElement.classList.add('form');

        closeModalListener(deleteModalDiv);
      
    }

    return {editModalDiv, projModalDiv, deleteModalDiv, createEditModal, createProjModal, deleteProjModal, addProjectListener, addSubmitListener, closeModalListener};
    
})();
   

export {modal};
