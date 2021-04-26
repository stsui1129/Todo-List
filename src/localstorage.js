import domFunctions from "./domfunctions";

function populateStorage() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects)); //projects being stored in key called "myProjects"
};

function retrieveData() {
    if(!localStorage["myProjects"]) {
        populateStorage();
    } else {
        let retrievedData = localStorage.getItem("myProjects"); //get data string
        let storedProjects = JSON.parse(retrievedData); //parse into array
        storedProjects.forEach(project => domFunctions.renderProject(project));
    }
}

export {populateStorage, retrieveData};

