import {myProjects, Project} from './project';
import ToDo from './todo';
import {renderToDo, addToDoToProject} from './domfunctions';



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

function formReset() {
    const form = document.getElementById('form');
    form.reset(); //clears the values in the form since we're preventing that with preventDefault()
}

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (event) => {
    addToDoToProject();
    toggleModal();
    event.preventDefault(); //prevents the form from reloading the script
    formReset();
});



const project1 = new Project ("p1title", []);
project1.addToDo("gym", "bench", "now", "high");
project1.addToDo("sleep", "ok", "later", "low");
project1.addToProjects();

const project2 = new Project ("p2title", []);
project2.addToDo("study", "javascript", "soon", "high");

console.log(project1._title);
console.log(project1.toDoList);
console.log(project2._title);
console.log(project2.toDoList);

console.log(myProjects);


renderToDo();
addToDoToProject();

function renderTasks() { // renders all the books in myLibrary array
    for (let i=0; i<project1.todoList.length; i++){
        rendertoDo(project1.todoList[i]);
    }
}
renderTasks();