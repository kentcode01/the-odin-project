import '../style.css';

import Cinnamon from '../images/cinnamon-donut.jpg';
import Coffee from '../images/coffee.jpg';
import Donuts from '../images/donut-assortment.jpg';


const menu = () => {
    
    let menuPage = document.createElement(`div`);
    menuPage.classList.add(`div-background`);
    
    let menuHeader = document.createElement(`h1`);
    let menuDiv = document.createElement(`div`);

    let foodDiv0 = document.createElement(`div`);
    let foodDiv1 = document.createElement(`div`);
    let foodDiv2 = document.createElement(`div`);

    let foodHeader0 = document.createElement(`h2`);
    let foodHeader1 = document.createElement(`h2`);
    let foodHeader2 = document.createElement(`h2`);

    let foodSubHeader0 = document.createElement(`h3`);
    let foodSubHeader1 = document.createElement(`h3`);
    let foodSubHeader2 = document.createElement(`h3`);

    let foodPara0 = document.createElement(`p`);
    let foodPara1 = document.createElement(`p`);
    let foodPara2 = document.createElement(`p`);

    menuHeader.textContent = `Menu`;

    foodHeader0.textContent = ` - Cinnamon & Sugar Donuts - `;
    foodHeader1.textContent = `Coffee`;
    foodHeader2.textContent = `Assorted Donuts`;

    foodSubHeader0.textContent = `$1.25 each`;
    foodSubHeader1.textContent = `$1.75`;
    foodSubHeader2.textContent = `$1.70 each`;

    foodPara0.textContent = `Donuts that will be on a discount until end of the week.`;
    foodPara1.textContent = `Fresh coffee we serve throughout the day.`;
    foodPara2.textContent = `Donuts of different flavors: glazed, chocolate, fruits, strawberry.`;
    
    const foodImg0 = new Image();
    foodImg0.src = Cinnamon;
    const foodImg1 = new Image();
    foodImg1.src = Coffee;
    const foodImg2 = new Image();
    foodImg2.src = Donuts;

    foodImg0.classList.add(`img-div`);
    foodImg1.classList.add(`img-div`);
    foodImg2.classList.add(`img-div`);
    
    menuPage.setAttribute(`class`, `menuCont`);

    foodDiv0.appendChild(foodHeader0);
    foodDiv0.appendChild(foodImg0);
    foodDiv0.appendChild(foodSubHeader0);
    foodDiv0.appendChild(foodPara0);
    foodDiv1.appendChild(foodHeader1);
    foodDiv1.appendChild(foodImg1);
    foodDiv1.appendChild(foodSubHeader1)
    foodDiv1.appendChild(foodPara1);
    foodDiv2.appendChild(foodHeader2);
    foodDiv2.appendChild(foodImg2);
    foodDiv2.appendChild(foodSubHeader2)
    foodDiv2.appendChild(foodPara2);
    menuDiv.appendChild(foodDiv0);
    menuDiv.appendChild(foodDiv1);
    menuDiv.appendChild(foodDiv2);
    menuPage.appendChild(menuHeader);
    menuPage.appendChild(menuDiv);

    menuDiv.classList.add('menu-div');
    foodHeader0.classList.add('menu-item-header');
    foodHeader1.classList.add('menu-item-header');
    foodHeader2.classList.add('menu-item-header');
    foodDiv0.classList.add('div-background');
    foodDiv1.classList.add('div-background');
    foodDiv2.classList.add('div-background');
    
    menuPage.classList.add('div-background');
    return menuPage;
};

export {menu};