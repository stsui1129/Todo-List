import {myProjects, Project} from './project';
import ToDo from './todo';
import domFunctions from './domfunctions';




const project1 = new Project ("p1title", []);
project1.addToDo("gym", "bench", "now", "high");
project1.addToDo("sleep", "ok", "later", "low");
project1.addToProjects();

const project2 = new Project ("p2title", []);
project2.addToDo("study", "javascript", "soon", "high");
project2.addToProjects();


console.log(project1._title);
console.log(project1.toDoList);
console.log(project2._title);
console.log(project2.toDoList);

console.log(myProjects);


// renderToDo(toDo);
domFunctions.addToDoToProject();

function renderTasks() { // renders all tasks in current project
    for (let i=0; i<project1.todoList.length; i++){
        domFunctions.rendertoDo(project1.todoList[i]);
    }
}
renderTasks();