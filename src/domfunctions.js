import {myProjects, Project} from './project';
import Todo from './todo';

const domFunctions = (() => {
    const toggleModal = () => {
        const modal = document.querySelector('.todo-modal');
        modal.classList.toggle("show-modal"); //toggles between .todo-modal class and .show-modal class
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

    const projectBtns = document.querySelector(".project-content");
    projectBtns.addEventListener('click', (e) => {
        toggleProject();
        e.target.classList.toggle("selected");
        // myProjects.find(project => project.id == e.target.dataset.key) //find the project where project.id = e.targetdatakey
        
        const allTodo = document.querySelectorAll(".todo-div");
        allTodo.forEach((todo) => {
            todo.dataset.id == e.target.dataset.key? todo.classList.remove("hidden") : todo.classList.add("hidden");   
        })
    });
   
    //when selected project clicked, go thru project.todolist and toggle classlist.


    
    const toggleProject = () => {
        const allProjectBtns = document.querySelectorAll("[data-key]");
        allProjectBtns.forEach(project => {
            if (project.classList.contains("selected")) {
                project.classList.toggle("selected");
            }
        })
    }

    
    

    const formReset = () => {
        const form = document.getElementById('form');
        form.reset();
    }

    
        const submitButton = document.querySelector("#submit-button");
        submitButton.addEventListener("click", e => {
            console.log("HI");
            addTodoToProject();
            
            toggleModal();
            e.preventDefault();
            formReset();
        });
  
        
    const renderTodo = (todo) => {
        const todoContent = document.querySelector(".todo-content");
        const todoDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const descriptionDiv = document.createElement("div");
        const dueDateDiv = document.createElement("div");
        const priorityDiv = document.createElement("div");
        todoContent.appendChild(todoDiv);
        todoDiv.appendChild(titleDiv);
        todoDiv.appendChild(descriptionDiv);
        todoDiv.appendChild(dueDateDiv);
        todoDiv.appendChild(priorityDiv);

        // titleDiv.textContent = todo.title;

        todoDiv.classList.add("todo-div");

        
        
        todoDiv.setAttribute("data-id", document.querySelector(".selected").dataset.key);
        titleDiv.classList.add("title-div");
        descriptionDiv.classList.add("description-div");
        dueDateDiv.classList.add("due-date-div");
        priorityDiv.classList.add("priority-div");
    }

    const addTodoToProject = (todo) => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        
        const selectedProjectBtn = document.querySelector(".selected");
        const selectedProject = myProjects.find(project => project.id == selectedProjectBtn.dataset.key);
        selectedProject.addTodo(title, description, dueDate, priority);
        renderTodo(todo);
        
    }

    const addNewProject = () => {
        const projectTitle = document.getElementById("project-title").value;
        
        if (myProjects.some(x => x._title === projectTitle) === false && projectTitle !== "") { //if project title does not exist & not empty
        const project = new Project (Date.now(), projectTitle, [], false);
        
        project.addToProjects();
        renderProject(project);
        }
    }

    const renderProject = (project) => {
        const projectContent = document.querySelector(".project-content");
        const projectDiv = document.createElement("div");
        const removeBtn = document.createElement("button");
        removeBtn.addEventListener("click", () => {
            projectDiv.remove();
            myProjects.splice(myProjects.indexOf(project), 1);
        })

        projectDiv.classList.add("project-div");
        projectDiv.textContent = project._title;
        removeBtn.classList.add("remove-project");
        removeBtn.textContent = "delete";
        projectDiv.setAttribute("data-key", project.id);
        projectContent.appendChild(projectDiv);
        projectDiv.appendChild(removeBtn);
    } 
    

    const renderAllProjects = () => {
        for (let i=0; i< myProjects.length; i++) {
            renderProject(myProjects[i]);

        }
    }

    return {toggleModal, formReset, renderTodo, addTodoToProject, addNewProject, renderProject, renderAllProjects};

})();


export default domFunctions;