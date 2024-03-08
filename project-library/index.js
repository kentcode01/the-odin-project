
const dialog = document.querySelector(`dialog`);
const showBtn = document.getElementById(`show`);
const closeBtn = document.getElementById(`close`);
const submitBtn = document.getElementById(`submit`);
const form = document.querySelector(`form`);
let bookList = document.getElementById(`book-list`);
const myLibrary = [];

showBtn.addEventListener(`click`, () => {
    dialog.showModal();
});

closeBtn.addEventListener(`click`, () => {
    dialog.close();
});

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const checkbox = document.getElementById(`read`);
    let checkboxTxt = ``;
    if(checkbox.checked){
        checkboxTxt = `read`;
    }

    let currbook = new Book(document.getElementById(`title`).value, document.getElementById(`author`).value,
    document.getElementById(`pages`).value, checkboxTxt);

    addBookToLibrary(currbook);
    
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
    bookList.innerHTML = ``;
    for(let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement(`div`);
        bookDiv.className = `book-div`;
        let bookText = document.createElement(`p`);
        let bookRemove = document.createElement(`button`);
        
        bookRemove.className = `remove`;
        bookRemove.textContent = `remove`;
        bookRemove.style.width = `4rem`;
        bookRemove.style.height = `1.5rem`;
        bookRemove.style.marginLeft = `2rem`;
        bookDiv.style.display = `flex`;
        bookDiv.style.alignItems = `center`;
        bookDiv.setAttribute(`id`, `${myLibrary[i].title}${myLibrary[i].pages}`.split(``).join(``));
        bookRemove.addEventListener(`click`, (e) => {
            console.log(e.target.parentElement)
            let idAttribute = (e.target.parentElement).getAttribute(`id`);
            myLibrary.splice(myLibrary.findIndex(i => i.key === idAttribute), 1);
            e.target.parentElement.remove();
        })

        bookText.textContent = (`${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages}, ${myLibrary[i].read}`);

        bookDiv.appendChild(bookText);
        bookDiv.appendChild(bookRemove);
        bookList.appendChild(bookDiv);
    }
}


myLibrary.push(new Book(`The Hobbit`, `J.R.R Tolkien`, 295, `read`))
myLibrary.push(new Book(`Animal Farm`, `George Orwell`, 92, ``));
myLibrary.push(new Book(`Don Quixote`, `Miguel de Cervantes`, 1072, `read`));
iterateLibrary();


