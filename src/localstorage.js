import domFunctions from "./domfunctions";
import {myProjects} from "./projectclass";

function populateStorage() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects)); //projects being stored in key called "myProjects"
    localStorage.setItem("selectedProjectID", document.querySelector(".selected").dataset.key);
};

function retrieveData() {
    if(!localStorage["myProjects"]) {
        populateStorage();
    } else {
        let retrievedData = localStorage.getItem("myProjects"); //get data string
        let storedProjects = JSON.parse(retrievedData); //parse into array
        let selectedProjectID = localStorage.getItem("selectedProjectID");
        let currentProject = myProjects.find(project => project.id == selectedProjectID);
        storedProjects.forEach(project => domFunctions.renderProject(project));
        storedProjects.forEach(project => {
            project.todoList.forEach(todo => domFunctions.renderTodo(todo))
        });
    }
}

export {populateStorage, retrieveData};

