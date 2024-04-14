import '../style.css';

const footer = () => {
    let footerDiv = document.createElement(`div`);
    let footerTxt1 = document.createElement('p');
    let footerTxt2 = document.createElement('p');

    footerTxt1.textContent = `Kentcode01`;
    footerTxt2.textContent = `Images from Unsplash`;

    footerDiv.appendChild(footerTxt1);
    footerDiv.appendChild(footerTxt2);

    footerDiv.classList.add('footer');
    return footerDiv;
};

export {footer};