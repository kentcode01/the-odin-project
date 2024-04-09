import './style.css';

const home = () => {
    
    console.log(`In the homepage module.`);
    let homePage = document.createElement(`div`);
    let nameHeader = document.createElement(`h1`)
    let summaryHeader = document.createElement(`h3`);
    let hoursDiv = document.createElement(`div`);
    let hoursHeader = document.createElement(`h3`);
    let hoursUl = document.createElement(`ul`);

    let hours = [`Sunday: 6am - 3pm`, `Monday: 6am - 5pm`, `Tuesday: 6am - 5pm`, `Wednesday: 6am - 5pm`,
                 `Thursday: 6am - 5pm`, `Friday: 5:30am - 7pm`, `Saturday: 5:30am - 7pm`];
    hoursHeader.textContent = `Store Hours`;
    hoursDiv.appendChild(hoursHeader);
    hoursDiv.appendChild(hoursUl);

    for(let i = 0; i < 8; i++) {
        let listItem = document.createElement(`li`);
        listItem.classList.add('hours-list');
        listItem.textContent = hours[i];
        hoursUl.appendChild(listItem);

    }    

    summaryHeader.textContent = `In our cafe, we serve fresh roasted coffee and
                            selection of donuts we change every season. Visit one of our stores!`
    nameHeader.textContent = `Kent's Coffee & Donuts`

    homePage.setAttribute(`class`, `homeCont`);

    homePage.appendChild(nameHeader);
    homePage.appendChild(summaryHeader);
    homePage.appendChild(hoursDiv);

    nameHeader.classList.add('title');
    summaryHeader.classList.add('div-background');
    hoursDiv.classList.add('div-background');
    hoursDiv.classList.add('hours');

    return homePage;
    
};

export {home};