import { sidebar } from "./main/sidebar";
import { content } from "./main/content";
import { helpers } from "./helper/functions";
import { project } from "./utils/project";
import { modal } from "./main/modal";
import './style.css';



const pageDiv = document.querySelector('#page');

pageDiv.appendChild(sidebar.sidebarNav);
pageDiv.appendChild(content.contentDiv);
pageDiv.appendChild(modal.editModalDiv);
pageDiv.appendChild(modal.projModalDiv);
pageDiv.appendChild(modal.deleteModalDiv);

modal.createEditModal();
modal.createProjModal();
modal.deleteProjModal();

helpers.addSampleData();

content.displayCurrProject(project("Today"), JSON.parse(localStorage.getItem('Today')).todos);

modal.addSubmitListener();
modal.closeModalListener(modal.editModalDiv);
content.createNavbar();

content.generateTodayProject();