import '../style.css';

const home = () => {

    let homePage = document.createElement(`div`);
    let nameHeader = document.createElement(`h1`)
    let summaryDiv = document.createElement(`div`);
    let textDiv = document.createElement(`h2`);
    let textHeader = document.createElement(`h2`);
    let aboutBtn = document.createElement(`button`);
    let hoursDiv = document.createElement(`div`);
    let hoursHeader = document.createElement(`h2`);
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

    textHeader.textContent = `In our cafe, we serve fresh roasted coffee and
                           selection of donuts we change every season. Visit one of our stores!
                           - Kent`;
    textDiv.appendChild(textHeader);
    
    nameHeader.textContent = ` - Kent's Coffee & Donuts - `;
    aboutBtn.textContent = `About Us`;

    homePage.setAttribute(`class`, `homeCont`);

    summaryDiv.appendChild(textDiv);
    homePage.appendChild(nameHeader);
    homePage.appendChild(summaryDiv);
    homePage.appendChild(hoursDiv);
    textDiv.appendChild(aboutBtn);

    nameHeader.classList.add('title');
    nameHeader.classList.add('div-background');
    textDiv.classList.add('text-div');
    textHeader.classList.add('text-header');
    aboutBtn.classList.add('about-button');
    summaryDiv.classList.add('summary-div');
    hoursUl.classList.add('hours-ul');
    hoursDiv.classList.add('div-background');
    hoursDiv.classList.add('hours');
    
    return homePage;
    
};

export {home};