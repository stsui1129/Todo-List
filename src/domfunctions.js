import {myProjects, Project} from './project';
import ToDo from './todo';

const domFunctions = (() => {
    const toggleModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.toggle("show-modal"); //toggles between .modal class and .show-modal class
    }

    // const modalButtons = () => {
    //     const trigger = document.querySelector('.trigger');
    //     trigger.addEventListener("click", toggleModal);

        
    //     const closeButton = document.querySelector(".close-button");
    //     closeButton.addEventListener("click", toggleModal);

    //     const cancelButton = document.querySelector("#cancel-button");
    //     cancelButton.addEventListener("click", toggleModal);
    // }

    

    const formReset = () => {
        const form = document.getElementById('form');
        form.reset(); //clears the values in the form since we're preventing that with preventDefault()
    }

    const submitForm = () => {
        const submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener("click", (event) => {
            addToDoToProject();
            toggleModal();
            event.preventDefault(); //prevents the form from reloading the script
            formReset();
        });
    }
        
    const renderToDo = (/*toDo*/) => {
        const toDoContent = document.querySelector(".todo-content");
        const toDoDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const descriptionDiv = document.createElement("div");
        const dueDateDiv = document.createElement("div");
        const priorityDiv = document.createElement("div");
        toDoContent.appendChild(toDoDiv);
        toDoDiv.appendChild(titleDiv);
        toDoDiv.appendChild(descriptionDiv);
        toDoDiv.appendChild(dueDateDiv);
        toDoDiv.appendChild(priorityDiv);

        toDoDiv.classList.add("todo-div");
        // toDoDiv.setAttribute("id", this.toDoList.indexOf(todo));
        titleDiv.classList.add("title-div");
        descriptionDiv.classList.add("description-div");
        dueDateDiv.classList.add("due-date-div");
        priorityDiv.classList.add("priority-div");
    }

    const addToDoToProject = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        
        const project = new Project (title, description, dueDate, priority);
        project.addToDo(title, description, dueDate, priority);
        renderToDo(this);
        
    }

    // function renderAllTasks() { // renders all tasks in current project
    //     const project = new Project (title, description, dueDate, priority);
    //     for (let i=0; i<project.toDoList.length; i++){
    //         domFunctions.renderToDo(project.toDoList[i]);
    //     }
    // }

    return {toggleModal, formReset, submitForm, renderToDo, addToDoToProject};

})();


export default domFunctions;