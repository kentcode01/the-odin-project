import { sidebar } from "./main/sidebar";
import { content } from "./main/content";
import { helpers } from "./helper/functions";
import { project } from "./utils/project";
import './style.css';


const pageDiv = document.querySelector('#page');

pageDiv.appendChild(sidebar.sidebarNav);
pageDiv.appendChild(content.contentDiv);

helpers.addSampleData();

content.displayCurrProject(project("Today"), JSON.parse(localStorage.getItem('Today')).todos);


