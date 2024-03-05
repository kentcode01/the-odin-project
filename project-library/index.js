
const dialog = document.querySelector(`dialog`);
const showBtn = document.getElementById(`show`);
const closeBtn = document.getElementById(`close`);
const submitBtn = document.getElementById(`submit`);
const form = document.querySelector(`form`);
let bookList = document.getElementById(`book-list`);


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

    addBookLibrary(currbook);
    
    dialog.close();
})

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookLibrary(book) {
    myLibrary.push(book)

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

    bookRemove.addEventListener(`click`, (e) => {
        e.target.parentElement.remove();
    })

    bookText.textContent = (`${book.title} by ${book.author}, ${book.pages}, ${book.read}`);

    bookDiv.appendChild(bookText);
    bookDiv.appendChild(bookRemove);
    bookList.appendChild(bookDiv);
}

function printBooks(library) {
    for(let i = 0; i < library.length; i++) {
        console.log(`${library[i].title} by ${library[i].author}, ${library[i].pages}, ${library[i].read}`);
    }
}

addBookLibrary(new Book(`The Hobbit`, `J.R.R Tolkien`, 295, `read`));
addBookLibrary(new Book(`Animal Farm`, `George Orwell`, 92, ``));
addBookLibrary(new Book(`Don Quixote`, `Miguel de Cervantes`, 1072, `read`));

printBooks(myLibrary);

