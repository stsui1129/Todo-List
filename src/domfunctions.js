import {myProjects, Project} from './project';
import ToDo from './todo';

const domFunctions = (() => {
    const toggleModal = () => {
        const modal = document.querySelector('.todo-modal');
        modal.classList.toggle("show-modal"); //toggles between .modal class and .show-modal class
    }

    

    const trigger = document.querySelector('.trigger');
    trigger.addEventListener("click", toggleModal);

        
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", toggleModal);
 
   
    const addProjectButton = document.querySelector("#add-button");
    addProjectButton.addEventListener("click", (event)=> {
        addNewProject(); 
        event.preventDefault();
        document.getElementById('project-form').reset();
    });

    // const projectBtns = document.querySelectorAll(".project-div");
    // projectBtns.forEach((project) => {
    //     project.addEventListener('click', (e) => {
    //     e.target.textContent = "you";
    //     });
    // }); why is this not working?

    

    
    

    const formReset = () => {
        const form = document.getElementById('form');
        form.reset();
    }

    const submitForm = () => {
        const submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener("click", (event) => {
            addToDoToProject();
            toggleModal();
            event.preventDefault();
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
        
        const project = new Project (title, []);
        project.addToDo(title, description, dueDate, priority);
        renderToDo(toDo);
        
    }

    const addNewProject = () => {
        const projectTitle = document.getElementById("project-title").value;
        if (myProjects.some(x => x._title === projectTitle) === false && projectTitle !== "") { //if project title does not exist & not empty
        const project = new Project (projectTitle, []);
        project.addToProjects();
        renderProject(project);
        }
    }

    const renderProject = (project) => {
        const projectContent = document.querySelector(".project-content");
        const projectDiv = document.createElement("div");
        const removeBtn = document.createElement("button");

        projectDiv.classList.add("project-div");
        projectDiv.textContent = project._title;
        removeBtn.classList.add("remove-project");
        removeBtn.textContent = "delete";
        projectDiv.setAttribute("id", myProjects.findIndex(x => x._title === project._title));
        projectContent.appendChild(projectDiv);
        projectDiv.appendChild(removeBtn);
    } 
    

    const renderAllProjects = () => {
        for (let i=0; i< myProjects.length; i++) {
            renderProject(myProjects[i]);
        }
    }

    
    // function renderAllTasks() { // renders all tasks in current project
    //     const project = new Project (title, description, dueDate, priority);
    //     for (let i=0; i<project.toDoList.length; i++){
    //         domFunctions.renderToDo(project.toDoList[i]);
    //     }
    // }

    return {toggleModal, formReset, submitForm, renderToDo, addToDoToProject, addNewProject, renderProject, renderAllProjects};

})();


export default domFunctions;