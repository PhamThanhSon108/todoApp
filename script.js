// getting all required elements
listArray = []
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const deleteIcon = document.querySelector(" span.iconbtn")
// onkeyup event
inputBox.onkeyup = ()=>{
    console.log('inputBox.value')
  if(inputBox.value.trim() != 0) {
      addBtn.classList.add('active')
  }
  else{
      addBtn.classList.remove('active')
  }
}
addBtn.onclick = ()=>{ 
    
    if(inputBox.value.trim() != 0) {
        addBtn.classList.add('active')
        listArray.push(inputBox.value.toString())
    }
    else{
        addBtn.classList.remove('active')
}
    let newLiTag = ''
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  

    inputBox.value = ""; //once task added leave the input field blank
    showTasks()
    }
function showTasks(){
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length; 
  //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
}
// delete task function
deleteTask = (index)=>{
  listArray.splice(index, 1); //delete or remove the li
   //call the showTasks function
   let newLiTag = ''
   listArray.forEach((element, index) => {
       newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
   });
   todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
 

   inputBox.value = ""; //once task added leave the input field blank
showTasks()
}
// delete all tasks function
deleteAllBtn.onclick = ()=>{
    
  listArray = []; //empty the array
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  todoList.innerHTML = '' //call the showTasks function
}