import ToDo from './todo';

let myProjects = [];

class Project {
    constructor(title, []) {
        this.title = title;
        this.toDoList = [];
    }

    // set title(newTitle) {
    //     this.title = newTitle;
    // }

    addToDo(title, description, dueDate, priority) {
        const toDo = new ToDo(title, description, dueDate, priority);
        this.toDoList.push(toDo);
    }
}

export {myProjects, Project}