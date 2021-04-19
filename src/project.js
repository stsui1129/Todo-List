import ToDo from './todo';

let myProjects = [];

class Project {
    constructor(title, [], selected) {
        this.title = title;
        this.toDoList = [];
        this.selected = selected;
    }
    
    set title(newTitle) {
        this._title = newTitle; // this.title = newTitle leads to infinite recursion
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