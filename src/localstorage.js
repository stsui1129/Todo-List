import domFunctions from "./domfunctions";
import {myProjects} from "./projectclass";

function populateStorage() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects)); //projects being stored in key called "myProjects"
    localStorage.setItem("selectedProject", document.querySelector(".selected").dataset.key);
};

function retrieveData() {
    if(!localStorage["myProjects"]) {
        populateStorage();
    } else {
        let retrievedData = localStorage.getItem("myProjects"); //get data string
        let storedProjects = JSON.parse(retrievedData); //parse into array
        let selectedProject = localStorage.getItem("selectedProject");
        // storedProjects.forEach(project => domFunctions.renderProject(project));
    }
}

export {populateStorage, retrieveData};

