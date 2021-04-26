import {myProjects, Project} from './projectclass';
import {populateStorage} from './localstorage';

const domFunctions = (() => {
    const toggleModal = () => {
        const modal = document.querySelector('.todo-modal');
        modal.classList.toggle("show-modal");
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
        populateStorage();
        const allTodo = document.querySelectorAll(".todo-div"); // if todo dataid == selected project's datakey, then remove hidden
        allTodo.forEach((todo) => {
            todo.dataset.id == e.target.dataset.key? todo.classList.remove("hidden") : todo.classList.add("hidden");   
        })
    });
    
    const toggleProject = () => {
        const allProjectBtns = document.querySelectorAll("[data-key]");
        allProjectBtns.forEach(project => {
            if (project.classList.contains("selected")) { // makes selected project unselected when another project is clicked
                project.classList.toggle("selected");
            }
        })  
    }

    const formReset = () => {
        const formCreate = document.getElementById('form-create');
        formCreate.reset();
    }

    document.getElementById('form-create').addEventListener("submit", e => { //submit eventlistener must be attached to form
            addTodoToProject();
            renderTodo();   
            toggleModal();
            e.preventDefault();
            formReset();   
        });

    const toggleEditModal = () => {
        const editModal = document.querySelector(".todo-modal-edit");
        editModal.classList.toggle("show-modal");
    }

    const closeEditButton = document.querySelector(".close-button-edit");
    closeEditButton.addEventListener("click", toggleEditModal); 

    const editTodo = (e) => {
        const selectedProjectBtn = document.querySelector(".selected");
        const selectedProject = myProjects.find(project => project.id == selectedProjectBtn.dataset.key);
        let currentTodo = selectedProject.todoList.find(todo => todo.id == e.target.parentNode.id); // todo.id same as tododiv.id
        // need to use let because we are redefining variable later
        let currentTodoDiv = e.target.parentNode;
        
        document.getElementById('form-edit').addEventListener("submit", e => {
            // console.log(currentTodo);
            const title = document.getElementById("edit-title").value;
            const description = document.getElementById("edit-description").value;
            const dueDate = document.getElementById("edit-due-date").value;
            const priority = document.querySelector('input[name="edit-priority"]:checked').value; 

            if (currentTodo && currentTodoDiv) { // this fixes the 'cannot read property of null' error
                    currentTodo.editThisTodo(title, description, dueDate, priority);
                
                    if (currentTodo.priority === "High") {
                        currentTodoDiv.style.background = "red";
                    }
                    if (currentTodo.priority === "Medium") {
                        currentTodoDiv.style.background = "orange";
                    }
                    if (currentTodo.priority === "Low") {
                        currentTodoDiv.style.background = "lime";
                    }
            
                    currentTodoDiv.childNodes[0].textContent = title; //childNodes[0] = titleDiv etc...
                    currentTodoDiv.childNodes[2].textContent = dueDate;
                }

            currentTodo = null; //need to reset this as everytime edit button is clicked, there's more than 1 currentTodo
            currentTodoDiv = null;
            const editModal = document.querySelector(".todo-modal-edit");
            editModal.classList.remove("show-modal");
            e.preventDefault();    
        })

        populateStorage();
    }

    document.addEventListener('click', (e) => {
        if (e.target.className === "edit-button"){ // edit button eventlistener
            toggleEditModal();
            editTodo(e);
        }
        if (e.target.className === "delete-button") { // delete button eventlistener
            e.target.parentNode.remove();

            const selectedProjectBtn = document.querySelector(".selected");
            const selectedProject = myProjects.find(project => project.id == selectedProjectBtn.dataset.key);

            const currentIndex = selectedProject.todoList.findIndex(todo => todo.id == e.target.parentNode.id);
            // finds index of current todo in selected project array and splice it out
            selectedProject.todoList.splice(currentIndex, 1);   

            populateStorage();
        }
    })
   
    const renderTodo = () => {
        const todoContent = document.querySelector(".todo-content");
        const todoDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const descriptionDiv = document.createElement("div");
        const dueDateDiv = document.createElement("div");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        todoContent.appendChild(todoDiv);
        todoDiv.appendChild(titleDiv);
        todoDiv.appendChild(descriptionDiv);
        todoDiv.appendChild(dueDateDiv);
        todoDiv.appendChild(editButton);
        todoDiv.appendChild(deleteButton);

        const selectedProjectBtn = document.querySelector(".selected");
        const selectedProject = myProjects.find(project => project.id == selectedProjectBtn.dataset.key);
        
        const addedTodo = selectedProject.todoList[selectedProject.todoList.length-1];
        // newly added todo is always the last element of the array
        titleDiv.textContent = addedTodo.title; 
        
        dueDateDiv.textContent = addedTodo.dueDate;
        editButton.textContent = "Edit details";

        deleteButton.textContent = "Delete";

        if (addedTodo.priority === "High") {
            todoDiv.style.background = "red";
        }
        if (addedTodo.priority === "Medium") {
            todoDiv.style.background = "orange";
        }
        if (addedTodo.priority === "Low") {
            todoDiv.style.background = "lime";
        }
        
        todoDiv.classList.add("todo-div");
        todoDiv.setAttribute("id", addedTodo.id);
        todoDiv.setAttribute("data-id", document.querySelector(".selected").dataset.key);
        titleDiv.classList.add("title-div");
        descriptionDiv.classList.add("description-div");
        dueDateDiv.classList.add("due-date-div");
        editButton.classList.add("edit-button");
        deleteButton.classList.add("delete-button");
    }

    const addTodoToProject = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        
        const selectedProjectBtn = document.querySelector(".selected");
        const selectedProject = myProjects.find(project => project.id == selectedProjectBtn.dataset.key);
        selectedProject.addTodo(Date.now(), title, description, dueDate, priority); // Date.now() gives random number

        populateStorage();
    }

    const addNewProject = () => {
        const projectTitle = document.getElementById("project-title").value;
        
        if (myProjects.some(x => x._title === projectTitle) === false && projectTitle !== "") { //if project title does not exist & not empty
        const project = new Project (Date.now(), projectTitle, [], false);
        
        project.addToProjects();
        renderProject(project);
        }

        populateStorage();
    }

    const renderProject = (project) => {
        const projectContent = document.querySelector(".project-content");
        const projectDiv = document.createElement("div");
        const removeBtn = document.createElement("button");
        removeBtn.addEventListener("click", () => {
            projectDiv.remove();
            project.deleteProject();
        })

        projectDiv.classList.add("project-div");
        projectDiv.textContent = project._title;
        removeBtn.classList.add("remove-project");
        removeBtn.textContent = "delete";
        projectDiv.setAttribute("data-key", project.id); 
        projectContent.appendChild(projectDiv);
        projectDiv.appendChild(removeBtn);
    } 
    
    return {renderProject}; //only function used elsewhere

})();

export default domFunctions;