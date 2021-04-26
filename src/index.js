import {myProjects, Project} from './projectclass';
import domFunctions from './domfunctions';
import {retrieveData} from './localstorage';

const defaultProject = new Project (234, "default project", []);
defaultProject.addToProjects();

// console.log(defaultProject.todoList);
// console.log(myProjects);

domFunctions.renderProject(defaultProject);
document.querySelector("[data-key='234']").classList.add("selected");

retrieveData();
// localStorage.clear();



