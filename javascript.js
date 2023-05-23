

let myLibrary = [];

function Book(title, author, pages, rating){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;

}




function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let rating = document.querySelector("#rating").value;
        let newBook = new Book(title, author, pages, rating);
        myLibrary.push(newBook);
        console.log(myLibrary)


}

//Rather then the ID of the submit btn, you want to refer to the ID of the form
//No backened so preventDefault() stops data going there
document.querySelector("#newBookForm").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
    closeModal();
    })
    





//
//
//
//Opening and closing functions for the add book btn
//
//
//
function openModal () {
    addModal.style.display = 'block';
    modalContainer.style.display = 'block';
}

function closeModal () {
    addModal.style.display = 'none';
    modalContainer.style.display = 'none';
}

const addBtn = document.querySelector("#addbutton");
addBtn.addEventListener('click', openModal)

const modalContainer = document.querySelector('#addModalContainer')
modalContainer.addEventListener('click', closeModal)