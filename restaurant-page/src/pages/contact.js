import '../style.css';

const contact = () => {
    console.log(`In the contact module.`);
    let contactPage = document.createElement(`div`);
    
    let contactDiv = document.createElement(`div`);
    let contactHeader = document.createElement(`h1`);
    let phoneHeader = document.createElement(`h3`);
    let emailHeader = document.createElement(`h3`);

    contactHeader.textContent = `Contact`;
    phoneHeader.textContent = `Phone Number: -blank-`;
    emailHeader.textContent = `Email: -blank-`;

    contactPage.setAttribute(`class`, `contactCont`);

    contactPage.appendChild(contactDiv);
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(phoneHeader);
    contactDiv.appendChild(emailHeader);

    contactDiv.classList.add('div-background');

    return contactPage;
    
};

export {contact};