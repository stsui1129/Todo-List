import {myProjects, Project} from './project';
import Todo from './todo';
import domFunctions from './domfunctions';




const defaultProject = new Project (234, "default project", [], true);
defaultProject.addTodo("gym", "bench", "now", "High");
defaultProject.addTodo("sleep", "ok", "later", "Low");
defaultProject.addToProjects();

console.log(defaultProject._title);
console.log(defaultProject.todoList);


console.log(myProjects);

// domFunctions.renderToDo(this);
// // domFunctions.renderAllTasks();
domFunctions.renderAllProjects();
document.querySelector("[data-key='234']").classList.add("selected");

