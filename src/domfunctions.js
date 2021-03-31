import {myProjects, Project} from './project';
import ToDo from './todo';


function renderToDo(toDo) {
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
    // toDoDiv.setAttribute("id", this.toDoList.indexOf(toDo));
    titleDiv.classList.add("title-div");
    descriptionDiv.classList.add("description-div");
    dueDateDiv.classList.add("due-date-div");
    priorityDiv.classList.add("priority-div");




}

function addToDoToProject() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.querySelector("input[name=priority]:checked").value;
    


    
}



export {renderToDo, addToDoToProject};