import ToDo from './todo';

let myProjects = [];

class Project {
    constructor(title, []) {
        this.title = title;
        this.toDoList = [];
    }
    // this.title = newTitle leads to infinite recursion
    set title(newTitle) {
        this._title = newTitle;
    }

    addToDo(title, description, dueDate, priority) {
        const toDo = new ToDo(title, description, dueDate, priority);
        this.toDoList.push(toDo);
    }

    addToProjects() {  
        myProjects.push(this);
    }
}

export {myProjects, Project};