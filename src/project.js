let myProjects = [];

class Project {
    constructor(title) {
        this.title = title;
        this.toDoList = [];
    }

    set title(newTitle) {
        this.title = newTitle;
    }

    addToDo(title, description, dueDate, priority) {
        const toDo = new ToDo(title, description, dueDate, priority);
        this.toDoList.push(toDo);
    }
}

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}