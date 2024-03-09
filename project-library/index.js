
const dialog = document.querySelector(`dialog`);
const addBtn = document.getElementById(`add`);
const closeBtn = document.getElementById(`close`);
const submitBtn = document.getElementById(`submit`);
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
    let checkboxTxt = `not read`;
    if(checkbox.checked){
        checkboxTxt = `read`;
    } 

    let currbook = new Book(document.getElementById(`title`).value, document.getElementById(`author`).value,
    document.getElementById(`pages`).value, checkboxTxt);

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
        let readText = document.createElement(`p`);
        let bookRemove = document.createElement(`button`);
        let linebreak = document.createElement(`br`);
        bookDiv.className = `book-div`;
        bookDiv.setAttribute(`id`, `${myLibrary[i].title}${myLibrary[i].pages}`.split(``).join(``));
        bookRemove.className = `remove`;
        bookRemove.textContent = `remove`;
        bookRemove.addEventListener(`click`, (e) => {
            let idAttribute = (e.target.parentElement).getAttribute(`id`);
            myLibrary.splice(myLibrary.findIndex(i => i.key === idAttribute), 1);
            e.target.parentElement.remove();
        });

        bookText.textContent = `${myLibrary[i].title}`;
        authorText.textContent = `by ${myLibrary[i].author}`
        pagesText.textContent = `${myLibrary[i].pages} pages`
        readText.textContent = `${myLibrary[i].read}`;

        bookDiv.appendChild(bookText);
        bookDiv.appendChild(authorText);
        bookDiv.appendChild(pagesText);
        bookDiv.appendChild(readText);
        bookDiv.appendChild(linebreak);
        bookDiv.appendChild(bookRemove);
        bookList.appendChild(bookDiv);
    }
}


myLibrary.push(new Book(`The Hobbit`, `J.R.R Tolkien`, 295, `read`))
myLibrary.push(new Book(`Animal Farm`, `George Orwell`, 92, `not read`));
myLibrary.push(new Book(`Don Quixote`, `Miguel de Cervantes`, 1072, `read`));
iterateLibrary();


