import { home } from "./pages/home";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";
import './style.css';

let contentDiv = document.querySelector(`#content`);
let navBar = document.querySelector(`nav`);
let buttonList = navBar.children;
let moduleList = [home, menu, contact];
let tabString = [`Home`, `Menu`, `Contact`];

contentDiv.appendChild(home());

document.body.classList.add('default');
document.body.classList.add('home-background');
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
