import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import './style.css';

let contentDiv = document.querySelector(`#content`);
let navBar = document.querySelector(`nav`);
let buttonList = navBar.children;
let moduleList = [home, menu, contact];
let tabString = [`home`, `menu`, `contact`];

contentDiv.appendChild(home());

document.body.classList.add('default');
navBar.classList.add('navbar');

for(let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener(`click`, () => {
        while(contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        
        contentDiv.appendChild(moduleList[i]())
    });
    buttonList[i].classList.add('button');
    buttonList[i].textContent = tabString[i];
}
