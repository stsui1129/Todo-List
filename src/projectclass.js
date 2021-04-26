import Todo from './todoclass';

let myProjects = [];

class Project {
    constructor(id, title, []) {
        this.id = id;
        this.title = title;
        this.todoList = [];
    }
    
    set title(newTitle) {
        this._title = newTitle; // this.title = newTitle leads to infinite recursion
    }

    addTodo(id, title, description, dueDate, priority) {
        const newTodo = new Todo(id, title, description, dueDate, priority);
        this.todoList.push(newTodo);
    }

    addToProjects() {  
        myProjects.push(this);
    }

    deleteProject() {
        myProjects.splice(myProjects.indexOf(this), 1);
    }
}

export {myProjects, Project};