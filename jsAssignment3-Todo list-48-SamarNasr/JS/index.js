/*  Declaration */

var TaskName = document.getElementById("Task-Name");
var TaskDescription = document.getElementById("Description");
var TaskProject = document.getElementById("Task-Project");
var TaskStatues = document.getElementById("statues");
var Taskcon = document.getElementById("Taskcon");
var TaskAdd = document.getElementById("add");
var TaskUpdate = document.getElementById("update");
var Tasks = [];
var gIndex;

/* Code */

function addTask() {
    if (TaskName.value == "" || TaskDescription.value == "" || TaskProject.value == "") {
        alert("Please , Fill all fields");
        return;
    }
    if (TaskStatues.value == "" || TaskStatues.value == "Choose Statues") {
        alert("Please , Choose a statues");
        return;
    }
    var taskItem = {
        tName: TaskName.value,
        tDescription: TaskDescription.value,
        tProject: TaskProject.value,
        tStatues: TaskStatues.value
    };
    Tasks.push(taskItem);
    displayTask();
    ClearTask();
};
function displayTask() {
    var Task = "";
    for (i = 0; i < Tasks.length; i++) {
        Task += `  <div class="col-md-4 my-2">
                <div class="card" style="width: 20rem">
                    <div class="card-body">
                        <h5 class="Task-name">${Tasks[i].tName}</h5>
                        <p class="Task-description">${Tasks[i].tDescription}</p>
                        <p class="Task-project">${Tasks[i].tProject}</p>
                        <p class="Task-statues">${Tasks[i].tStatues}</p>
                        <a onclick="update(${i})"class="btn btn-info">Update</a>
                        <a onclick="deletTask(${i})" class="btn btn-danger">Delet</a>
                    </div>
                </div>
            </div>  `;
    }
    Taskcon.innerHTML = Task;
};
function ClearTask() {
    TaskName.value = null;
    TaskDescription.value = null;
    TaskProject.value = null;
    TaskStatues.value = "Choose Statues";
}
function update(index) {
    TaskName.value = Tasks[index].tName;
    TaskDescription.value = Tasks[index].tDescription;
    TaskProject.value = Tasks[index].tProject;
    TaskStatues.value = Tasks[index].tStatues;
    TaskAdd.classList.add("d-none");
    TaskUpdate.classList.remove("d-none");
    TaskUpdate.classList.add("info");
    gIndex = index;
}
function updateTask() {
    var taskItem = {
        tName: TaskName.value,
        tDescription: TaskDescription.value,
        tProject: TaskProject.value,
        tStatues: TaskStatues.value
    };
    Tasks.splice(gIndex, 1, taskItem);
    displayTask();
    ClearTask();
    TaskAdd.classList.remove("d-none")
    TaskUpdate.classList.add("d-none")
};
function deletTask(index) {
    Tasks.splice(index, 1);
    displayTask();
};

