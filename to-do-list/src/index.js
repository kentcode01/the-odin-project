import { sidebar } from "./main/sidebar";
import { content } from "./main/content";
import { helpers } from "./helper/functions";
import { project } from "./utils/project";
import './style.css';
import { modal } from "./main/modal";



const pageDiv = document.querySelector('#page');

pageDiv.appendChild(sidebar.sidebarNav);
pageDiv.appendChild(content.contentDiv);
pageDiv.appendChild(modal.editModalDiv);
pageDiv.appendChild(modal.projModalDiv);



modal.createEditModal();
modal.createProjModal();

helpers.addSampleData();

content.displayCurrProject(project("Today"), JSON.parse(localStorage.getItem('Today')).todos);

modal.addSubmitListener();
modal.closeModalListener(modal.editModalDiv);
content.createNavbar();