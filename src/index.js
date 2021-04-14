import {myProjects, Project} from './project';
import ToDo from './todo';
import domFunctions from './domfunctions';




const defaultProject = new Project ("default project", []);
defaultProject.addToDo("gym", "bench", "now", "high");
defaultProject.addToDo("sleep", "ok", "later", "low");
defaultProject.addToProjects();

// const project2 = new Project ("p2title", []);
// project2.addToDo("study", "javascript", "soon", "high");
// project2.addToProjects();


console.log(defaultProject._title);
console.log(defaultProject.toDoList);
// console.log(project2._title);
// console.log(project2.toDoList);

console.log(myProjects);


// domFunctions.renderToDo(this);
// // domFunctions.renderAllTasks();
domFunctions.renderAllProjects();
