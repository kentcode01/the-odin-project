import { sidebar } from "./main/sidebar";
import { content } from "./main/content";
import { helpers } from "./helper/functions";
import { project } from "./utils/project";
import './style.css';
import { modal } from "./main/modal";


const pageDiv = document.querySelector('#page');

pageDiv.appendChild(sidebar.sidebarNav);
pageDiv.appendChild(content.contentDiv);
pageDiv.appendChild(modal.modalDiv);

modal.createModal();

helpers.addSampleData();

content.displayCurrProject(project("Today"), JSON.parse(localStorage.getItem('Today')).todos);

modal.addSubmitListener();

