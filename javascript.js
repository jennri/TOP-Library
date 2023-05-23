















//
//
//
//Opening and closing functions for the add book btn
//
//
//
const openModal = () => {
    addModal.style.display = 'block';
    modalContainer.style.display = 'block';
}

const closeModal = () => {
    addModal.style.display = 'none';
    modalContainer.style.display = 'none';
}

const addBtn = document.querySelector("#addbutton");
addBtn.addEventListener('click', openModal)

const modalContainer = document.querySelector('#addModalContainer')
modalContainer.addEventListener('click', closeModal)