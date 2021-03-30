import {myProjects, Project, ToDo} from './project';



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

function addToDoToProject() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;


}



function renderToDo() {
    const toDoContent = document.querySelector(".todo-content");
    const toDoDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const dueDateDiv = document.createElement("div");
    const priorityDiv = document.createElement("div");

}