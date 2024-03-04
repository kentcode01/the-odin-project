const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        // console.log(`${this.title} by ${this.author}, ${pages}, ${read}`);
    }
}

function addBookLibrary(book) {
    myLibrary.push(book)
}

function printBooks(library) {
    for(let i = 0; i < library.length; i++) {
        console.log(`${library[i].title} by ${library[i].author}, ${library[i].pages}, ${library[i].read}`);
    }
}

addBookLibrary(new Book(`The Hobbit`, `J.R.R Tolkien`, 295, `read`));
addBookLibrary(new Book(`Animal Farm`, `George Orwell`, 92, `not read`));
addBookLibrary(new Book(`Don Quixote`, `Miguel de Cervantes`, 1072, `read`));


printBooks(myLibrary)