const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
trigger.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("show-modal"); //toggles between .modal class and .show-modal class
}

