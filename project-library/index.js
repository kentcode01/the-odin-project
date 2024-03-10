
const dialog = document.querySelector(`dialog`);
const addBtn = document.getElementById(`add`);
const closeBtn = document.getElementById(`close`);
const form = document.querySelector(`form`);
let bookList = document.getElementById(`book-list`);
const myLibrary = [];


addBtn.addEventListener(`click`, () => {
    dialog.showModal();
});

closeBtn.addEventListener(`click`, () => {
    dialog.close();
});

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const checkbox = document.getElementById(`read`);
    
    let currbook = new Book(document.getElementById(`title`).value, document.getElementById(`author`).value,
    document.getElementById(`pages`).value, checkbox.checked);

    addBookToLibrary(currbook);
    form.reset();
    dialog.close();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.key = (title + pages).split(``).join(``);
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    iterateLibrary();
}

function iterateLibrary() {
    while(bookList.hasChildNodes()) {
        bookList.removeChild(bookList.firstChild);
    }

    for(let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement(`div`);
        let bookText = document.createElement(`p`);
        let authorText = document.createElement(`p`);
        let pagesText = document.createElement(`p`);
        let readDiv = document.createElement(`div`);
        let readLegend = document.createElement(`legend`);
        let readInput = document.createElement(`input`);
        let removeDiv = document.createElement(`div`);
        let bookRemove = document.createElement(`button`);
        let linebreak = document.createElement(`br`);

        readDiv.setAttribute(`id`, `read-div`);
        readLegend.setAttribute(`for`, `read`);
        readInput.setAttribute(`type`, `checkbox`);
        readInput.setAttribute(`id`, `read`);
        readLegend.textContent = `Read`;
        if(myLibrary[i].read === true) {
            readInput.checked = true;
        }
        bookDiv.className = `book-div`;
        bookDiv.setAttribute(`id`, `${myLibrary[i].title}${myLibrary[i].pages}`.split(``).join(``));
        removeDiv.className = `remove-div`;
        bookRemove.className = `remove`;
        removeDiv.appendChild(bookRemove);
        bookRemove.addEventListener(`click`, (e) => {
            let idAttribute = (e.target.parentElement).getAttribute(`id`);
            myLibrary.splice(myLibrary.findIndex(i => i.key === idAttribute), 1);
            e.target.parentElement.parentElement.remove();
        });

        bookText.textContent = `${myLibrary[i].title}`;

        if(bookText.textContent.length > 100) {
            bookText.textContent = (bookText.textContent).slice(0, 100) + `...`;
        }

        authorText.textContent = `${myLibrary[i].author}`
        pagesText.textContent = `${myLibrary[i].pages} pages`
        bookRemove.textContent = `remove`;
        
        readDiv.appendChild(readInput);
        readDiv.appendChild(readLegend);
        bookDiv.appendChild(bookText);
        bookDiv.appendChild(authorText);
        bookDiv.appendChild(pagesText);
        bookDiv.appendChild(readDiv);
        bookDiv.appendChild(linebreak);
        bookDiv.appendChild(removeDiv);
        bookList.appendChild(bookDiv);
    }
}


myLibrary.push(new Book(`The Hobbit`, `J.R.R Tolkien`, 295, true))
myLibrary.push(new Book(`Animal Farm`, `George Orwell`, 92, false));
myLibrary.push(new Book(`Don Quixote`, `Miguel de Cervantes`, 1072, true));
myLibrary.push(new Book(`INTRODUCTION TO OBJECT-ORIENTED PROGRAMMING IN JAVA`, `various`, 239, true))
iterateLibrary();


