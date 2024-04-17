import '../style.css';

const content = () => {
    let contentDiv = document.createElement('div');

    contentDiv.classList.add('content');
    contentDiv.textContent = 'Content';
    return contentDiv;

}

export { content };