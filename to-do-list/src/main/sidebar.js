import '../style.css';
import { modal } from './modal';

const sidebar = (() => {
    const sidebarNav = document.createElement('div');
    const addProjTab = document.createElement('div');
    const addProjBtn = document.createElement('button');
    const projBtnText = document.createElement('p');
    
    projBtnText.textContent = 'Add Project';

    addProjTab.setAttribute('id', 'add-proj-tab');
    addProjBtn.setAttribute('id', 'add-proj-btn');
    projBtnText.setAttribute('id', 'add-btn-text');
   
    addProjBtn.addEventListener('click', () => {
        modal.addProjectListener();
    });
    
    addProjTab.appendChild(addProjBtn);
    addProjTab.appendChild(projBtnText);
    sidebarNav.appendChild(addProjTab);

    sidebarNav.classList.add('sidebar');

    return {sidebarNav, addProjTab};
})();

export {sidebar};

