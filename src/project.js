let myProjects = [];

class Project {
    constructor(title) {
        this.title = title;
        this.toDo = [];
    }

    set title(newTitle) {
        this.title = newTitle;
    }

    addToDo(title, description, dueDate, priority) {
        const toDo = new toDO(title, description, dueDate, priority)
        this.toDo.push(toDo);
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