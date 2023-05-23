//To add
//required inputs
//if no input was put in
//nice looking book cards
//edit button to remove/ or a bin that displays a modal

let myLibrary = [];


function Book(title, author, pages, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;

}

//
//
//Retrives all the data inputted into the modal 
//These values are added to function Book(title, author, pages, rating)
//Which then are pushed into the myLibrary array with all the other books
//render() will loop through the array and display it all onto HTML
//
//
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let rating = document.querySelector("#rating").value;
    let newBook = new Book(title, author, pages, rating);
    myLibrary.push(newBook);
    render();
}

//
//
//Since we used an array to store all the books, to remove a certain book
//you just match the title/author, find the index number then splice it out
//In this case, we have a remove btn on every card so there's no need to match
//
//
function removeBook(index){
    myLibrary.splice(index, 1)
    render();
}

//
//
//When addBookToLibrary() is run...
//For every new book added, it remopves all current divs and loops thru each book
//A new div (bookEle) is created for each book that includes all it's metadata
//This div is appended to the element already established in the HTML (div with ID="bookCards")
//
//
function render() {
    let libraryEle = document.querySelector("#booksCards");
    libraryEle.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEle = document.createElement('div');
        //Oddly, let bookElement = document... doesn't work. "Element" doesn't seem to play nicely.
        //Best to shorten to Ele or e
        //Grabs book title of the looping object and places the title etc into a paragraph
        bookEle.innerHTML = `
        <div class="card-header">
        <h2 class="card-title">${book.title}</h2>
        <h5 class="card-author">${book.author}</h5>
        <button class="card-remove" onclick="removeBook(${i})"Remove</button>
        </div>
        <div class="card-body"> 
        <p>${book.pages} pages</p>
        <p>${book.rating} out of 10</p>
        `
        libraryEle.appendChild(bookEle);
    }
}



//Rather then the ID of the submit btn, you want to refer to the ID of the form
//No backened so preventDefault() stops data going there
document.querySelector("#newBookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    closeModal();
})






//
//
//
//Opening and closing modals for the add book btn
//
//
//
function openModal() {
    addModal.style.display = 'block';
    modalContainer.style.display = 'block';
}

function closeModal() {
    addModal.style.display = 'none';
    modalContainer.style.display = 'none';
}

const addBtn = document.querySelector("#addbutton");
addBtn.addEventListener('click', openModal)

const modalContainer = document.querySelector('#addModalContainer')
modalContainer.addEventListener('click', closeModal)