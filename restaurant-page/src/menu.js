import './style.css';

import Cinnamon from './images/cinnamon-donut.jpg';
import Coffee from './images/coffee.jpg';
import Donuts from './images/donut-assortment.jpg';


const menu = () => {
    console.log(`In the menu module.`);
    let menuPage = document.createElement(`div`);
    menuPage.classList.add(`menu-page`);
    let menuHeader = document.createElement(`h1`);

    let foodDiv0 = document.createElement(`div`);
    let foodDiv1 = document.createElement(`div`);
    let foodDiv2 = document.createElement(`div`);

    let foodHeader0 = document.createElement(`h2`);
    let foodHeader1 = document.createElement(`h2`);
    let foodHeader2 = document.createElement(`h2`);

    let foodSubHeader1 = document.createElement(`h3`);
    let foodSubHeader2 = document.createElement(`h3`);

    let foodPara0 = document.createElement(`p`);
    let foodPara1 = document.createElement(`p`);
    let foodPara2 = document.createElement(`p`);

    menuHeader.textContent = `Menu`;

    foodHeader0.textContent = ` - Cinnamon & Sugar Donut - `;
    foodHeader1.textContent = `Coffee and Drinks`;
    foodHeader2.textContent = `Assorted Donuts`;

    foodSubHeader1.textContent = `$1.75`;
    foodSubHeader2.textContent = `$1.50 each`;

    foodPara0.textContent = `Donuts that will be on a 25% discount until end of the week.`;
    foodPara1.textContent = `Fresh coffee we serve throughout the day.`;
    foodPara2.textContent = `Donuts of different flavors: glazed, chocolate, fruits, strawberry.`;
    
    const foodImg0 = new Image();
    foodImg0.src = Cinnamon;
    const foodImg1 = new Image();
    foodImg1.src = Coffee;
    const foodImg2 = new Image();
    foodImg2.src = Donuts;
    
    menuPage.setAttribute(`class`, `menuCont`);

    foodDiv0.appendChild(foodHeader0);
    foodDiv0.appendChild(foodImg0);
    foodDiv0.appendChild(foodPara0);
    foodDiv1.appendChild(foodHeader1);
    foodDiv1.appendChild(foodImg1);
    foodDiv1.appendChild(foodSubHeader1)
    foodDiv1.appendChild(foodPara1);
    foodDiv2.appendChild(foodHeader2);
    foodDiv2.appendChild(foodImg2);
    foodDiv2.appendChild(foodSubHeader2)
    foodDiv2.appendChild(foodPara2);
    menuPage.appendChild(menuHeader);
    menuPage.appendChild(foodDiv0);
    menuPage.appendChild(foodDiv1);
    menuPage.appendChild(foodDiv2);

    menuPage.classList.add('div-background');

    foodDiv0.classList.add('div-background');
    foodDiv1.classList.add('div-background');
    foodDiv2.classList.add('div-background');
    
    return menuPage;
};

export {menu};