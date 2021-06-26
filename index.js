const taskcontainer=document.querySelector(".task_container");

let globalStore=[];

const generateNewCard=(taskData) =>` 
<div class="col-md-6 col-lg-4" >
<div class="card text-center d flex justify-content-end gap-2">
    <div class="card-header">
        <button type="button" class="btn btn-outline-success">
            <i class="fas fa-pencil-alt"></i>
            
        </button>
        <button type="button" class="btn btn-outline-danger"id=${taskData.id} onclick="deleteCard.apply(this,arguements)">
            <i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguements)"></i></button>
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

const loadIniitialCardData = () =>{

    const getCardData= localStorage.getItem("tasKy");

    const {cards}=JSON.parse(getCardData);

    cards.map((cardObject)=>{
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    
        globalStore.push(cardObject);

    })

};


const saveChanges=()=>{
    const taskData={
        id:`${Date.now()}`,//unique number for card id
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value,
    };
  

    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));
    
    globalStore.push(taskData);

    localStorage.setItem("tasKy", JSON.stringify({cards:globalStore}));


};


const deleteCard=(event)=>{
    event=window.event;

    const targetID = event.target.id;
    const tagname=event.target.tagName;
    globalStore=globalStore.filter((cardObject)=> cardObject.id!==targetID);
    localStorage.setItem("tasKy",JSON.stringify({cards:globalStore}));

    if(tagname==="BUTTON"){
        return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode);
    }
    else{
        return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode);
    }
    //taskcontainer.removeChild(document.getElementById(targetID));



};
//issues

//page refresh will cause the data to be deleted ->local storage ->5MB

//API ->Application progamming interface 

//localstorage ->Application
//access programming via->Programming
//interface as a middle man 

//localstorage ->with some method ->javascript

//features
//delete the card
//edit the card 
