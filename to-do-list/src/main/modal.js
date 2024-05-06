
const modal = (() => {

    const modalDiv = document.createElement('div');

    const createModal = () => {

        let formDiv = document.createElement('div');
        let titleDiv = document.createElement('p');
        let formElement = document.createElement('form');
        let descriptLegend = document.createElement('legend');
        let descriptInput = document.createElement('input');
        let dateLegend = document.createElement('legend');
        let dateInput = document.createElement('input');
        let priorLegend = document.createElement('legend');
        let priorInput = document.createElement('input');
        let notesLegend = document.createElement('legend');
        let notesInput = document.createElement('input');
        let submitBtn = document.createElement('button');

        titleDiv.setAttribute('id', 'title');
        descriptLegend.setAttribute('for', 'description');
        descriptInput.setAttribute('id', 'description');
        descriptInput.setAttribute('type', 'text');
        dateLegend.setAttribute('for', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('type', 'date');
        priorLegend.setAttribute('for', 'priority');
        priorInput.setAttribute('id', 'priority');
        priorInput.setAttribute('type', 'text');
        notesLegend.setAttribute('for', 'notes');
        notesInput.setAttribute('type', 'text');
        notesInput.setAttribute('id', 'notes');

        submitBtn.setAttribute('type', 'submit')

        titleDiv.textContent = '';
        descriptLegend.textContent = 'Description: ';
        dateLegend.textContent = 'Date: ';
        priorLegend.textContent = 'Priority: ';
        notesLegend.textContent = 'Notes: ';
        submitBtn.textContent = 'Save Changes';

        modalDiv.appendChild(formDiv);
        formDiv.appendChild(formElement);
        formElement.appendChild(titleDiv);
        formElement.appendChild(descriptLegend);
        formElement.appendChild(descriptInput);
        formElement.appendChild(dateLegend);
        formElement.appendChild(dateInput);
        formElement.appendChild(priorLegend);
        formElement.appendChild(priorInput);
        formElement.appendChild(notesLegend);
        formElement.appendChild(notesInput);
        formElement.appendChild(submitBtn);

        modalDiv.classList.add('modal');
        modalDiv.classList.add('hidden');
        formDiv.classList.add('modal-form-div');
        formElement.classList.add('form');
    }


    const addSubmitListener = () => {
        
        let submitBtn = modalDiv.querySelector('button[type=submit]');
       
        submitBtn.addEventListener('click', (e) => {
            let projName = modalDiv.id;
            let todoName = modalDiv.getElementsByTagName('form')[0].id;

            e.preventDefault();
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
           
            let formElement = modalDiv.getElementsByTagName('form')[0];
            todoObj.description = formElement.querySelector('#description').value;
            todoObj.notes = formElement.querySelector('#notes').value;

            objList.splice(index, 1, todoObj);
            let myProj = JSON.parse(localStorage.getItem(`${projName}`));
            myProj.todos = objList;
            localStorage.setItem(projName, JSON.stringify(myProj));
            modal.modalDiv.classList.add('hidden');
            modal.modalDiv.removeAttribute('id');
            modalDiv.getElementsByTagName('form')[0].removeAttribute('id');
            
        })
    }

    return {modalDiv, createModal, addSubmitListener};
    
})();
   

export {modal};
