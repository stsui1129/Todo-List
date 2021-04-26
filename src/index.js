import {myProjects, Project} from './projectclass';
import domFunctions from './domfunctions';

const renderAllProjects = () => {
    for (let i=0; i< myProjects.length; i++) {
        domFunctions.renderProject(myProjects[i]);
    }
}

const defaultProject = new Project (234, "default project", []);
defaultProject.addToProjects();

console.log(defaultProject.todoList);
console.log(myProjects);

renderAllProjects();
document.querySelector("[data-key='234']").classList.add("selected");

localStorage.retrieveData();



