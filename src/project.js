import Todo from './todo';

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

    addTodo(title, description, dueDate, priority) {
        const todo = new Todo(title, description, dueDate, priority);
        this.todoList.push(todo);
    }

    addToProjects() {  
        myProjects.push(this);
    }
}

export {myProjects, Project};