const taskcontainer=document.querySelector(".task_container");

const generateNewCard=(taskData) =>` 
<div class="col-md-6 col-lg-4" id=${taskData.id}>
<div class="card text-center d flex justify-content-end gap-2">
    <div class="card-header">
        <button type="button" class="btn btn-outline-success">
            <i class="fas fa-pencil-alt"></i>
            
        </button>
        <button type="button" class="btn btn-outline-danger">
            <i class="fas fa-trash-alt"></i></button>
    </div>
    <img src=${taskData.imageUrl}>
    <div class="card-body">
      <h5 class="card-title">${taskdata.taskTitle}</h5>
      <p class="card-text">${taskdata.taskDescription}</p>
      <a href="#"class="badge bg-primary">${taskdata.taskType}</a>
      
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open task</button>

    
    </div>
  </div>
</div>
`;


const saveChanges=()=>{
    const taskData={
        id:`${Date.now()}`,//unique number for card id
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value,
    };
  

    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskdata))
};
