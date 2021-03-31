import {myProjects, Project} from './project';
import ToDo from './todo';



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

const project1 = new Project ("p1title", []);
project1.addToDo("gym", "bench", "now", "high");
project1.addToDo("sleep", "ok", "later", "low");

console.log(project1.title);
console.log(project1.toDoList);




