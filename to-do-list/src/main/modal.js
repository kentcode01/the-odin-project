
const modal = (() => {

    let backgroundDiv = document.createElement('div');
    let modalDiv = document.createElement('div');
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

    titleDiv.textContent = '';
    descriptLegend.textContent = 'Description: ';
    dateLegend.textContent = 'Date: ';
    priorLegend.textContent = 'Priority: ';
    notesLegend.textContent = 'Notes: ';

    backgroundDiv.appendChild(modalDiv);
    modalDiv.appendChild(formElement);
    formElement.appendChild(titleDiv);
    formElement.appendChild(descriptLegend);
    formElement.appendChild(descriptInput);
    formElement.appendChild(dateLegend);
    formElement.appendChild(dateInput);
    formElement.appendChild(priorLegend);
    formElement.appendChild(priorInput);
    formElement.appendChild(notesLegend);
    formElement.appendChild(notesInput);

    backgroundDiv.classList.add('modal-background');
    modalDiv.classList.add('modal');
    modalDiv.classList.add('hidden');

    return {modalDiv};
    
})();
   

export {modal};
