import {myProjects, Project} from './project';
import Todo from './todo';
import domFunctions from './domfunctions';




const defaultProject = new Project (234, "default project", []);
defaultProject.addToProjects();

console.log(defaultProject.todoList);
console.log(myProjects);

domFunctions.renderAllProjects();
document.querySelector("[data-key='234']").classList.add("selected");

