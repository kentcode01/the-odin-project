import { format, parse } from "date-fns";
import { content } from "./content";
import { createProj, project } from "../utils/project";

const modal = (() => {

    const editModalDiv = document.createElement('div');
    const projModalDiv = document.createElement('div');

    const createEditModal = () => {

        let formDiv = document.createElement('div');
        let titleDiv = document.createElement('p');
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

        titleDiv.setAttribute('id', 'title');
        descriptLegend.setAttribute('for', 'description');
        descriptInput.setAttribute('id', 'description');
        descriptInput.setAttribute('type', 'text');
        dateLegend.setAttribute('for', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('type', 'date');
        
        priorLegend.setAttribute('for', 'priority');
        priorSelect.setAttribute('id', 'priority');
        priorSelect.setAttribute('name', 'priority');
        notesLegend.setAttribute('for', 'notes');
        notesInput.setAttribute('type', 'text');
        notesInput.setAttribute('id', 'notes');

        submitBtn.setAttribute('type', 'submit')
        closeBtn.classList.add('close-btn');

        titleDiv.textContent = '';
        descriptLegend.textContent = 'Description: ';
        dateLegend.textContent = 'Date: ';
        priorLegend.textContent = 'Priority: ';
        notesLegend.textContent = 'Notes: ';
        submitBtn.textContent = 'Save Changes';
        closeBtn.textContent = 'X';

        editModalDiv.appendChild(formDiv);
        formDiv.appendChild(formElement);

        formElement.appendChild(closeBtn);
        formElement.appendChild(titleDiv);
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
           
            let formElement = editModalDiv.getElementsByTagName('form')[0];
            todoObj.description = formElement.querySelector('#description').value;
            todoObj.dueDate = format(parse(formElement.querySelector('#date').value, 'yyyy-mm-dd', new Date()), 'mm/dd/yyyy');
            todoObj.priority = formElement.querySelector('#priority').value;
            todoObj.notes = formElement.querySelector('#notes').value;

            objList.splice(index, 1, todoObj);
            let myProj = JSON.parse(localStorage.getItem(`${projName}`));
            myProj.todos = objList;
            localStorage.setItem(projName, JSON.stringify(myProj));
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

    return {editModalDiv, projModalDiv, createEditModal, createProjModal, addProjectListener, addSubmitListener, closeModalListener};
    
})();
   

export {modal};
