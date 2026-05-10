import { Task } from "./task.js";
const taskPartId = "-task-";
const localStorageTasksKey = "tasks";

class Manager {
    constructor(id, parent) {
        this.id = id;
        this.parent = parent;
        this.tasksList = [];
        this.nextTaskId = 1;

        this.createElemens();
    }

    init() {
        (this.readTaskFromLocalStorage() || [])
            .forEach((storedTask) => this.add(storedTask));
    }

    createElemens() {
        let divElement = document.createElement("div");
        divElement.className = "app";
        let inputGroup = document.createElement("div");
        inputGroup.className = "input-group";
        let inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.addEventListener("keypress", (e) => this.addNewTask(e));

        let listElement = document.createElement("ol");
        listElement.id = this.id;
        this.parent.appendChild(divElement);
        divElement.appendChild(listElement);
        divElement.appendChild(inputGroup);
        inputGroup.appendChild(inputElement);
    }


    add(taskName) {

        let taskId = `${this.id}${taskPartId}${this.nextTaskId}`;
        let task = new Task(taskId, taskName, this.id);
        this.nextTaskId += 1;
        this.tasksList.push(task);
        let listItem = task.print();

        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Usuń -";
        buttonDelete.className = "delete-btn";
        listItem.appendChild(buttonDelete);
        buttonDelete.addEventListener("click", (e) => { this.deleteTask(e) });
    }

    deleteTask(e) {
        this.tasksList = this.tasksList.filter(task => task.id !== e.target.parentElement.id);
        document.getElementById(e.target.parentElement.id).remove();
        this.updateLocalStorage();
    }

    addNewTask(e) {
        if (event.key === "Enter") {
            this.add(e.srcElement.value);
            e.srcElement.value = "";
            this.updateLocalStorage();
        }
    }

    readTaskFromLocalStorage() {
        const storedTasks = JSON.parse(localStorage.getItem(localStorageTasksKey));
        return storedTasks;
    }

    updateLocalStorage() {
        const tasksToStored = this.tasksList.map((task) => task.name);
        console.log(tasksToStored);
        localStorage.setItem("tasks", JSON.stringify(tasksToStored));
    }
}

export { Manager };