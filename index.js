
let addToDoButton = document.getElementById('push');
let toDoContainer = document.getElementById('tasks');
let inputField = document.getElementById('newTask1');
let newTask = document.getElementById('newTask');



 


addToDoButton.onclick = function(){
    document.getElementById('error').innerText = "";    // if(inputField.value.length == 0){
    if(inputField.value.length == 0){                    //     alert('Please Enter A Task') 
       document.getElementById('error').innerText = "Please Enter A Task"
    }
    else{
        // let newTask = document.getElementById(newTask);
        let paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        let a = document.createElement('a');
        a.textContent="x";
        a.href = "javascript:void(0)";
        a.className = "remove"
        paragraph.appendChild(a);
        let pos = newTask.firstElementChild;
        if(pos == null){
            newTask.appendChild(paragraph);

        }else{

            newTask.insertBefore(paragraph,pos);
        }
    }
    
        if(inputField.value=""){

        }
   
    }
    let btn = document.getElementById('newTask');
     btn.addEventListener('click', function(e){

        // newTask.document.getElementById('p');
        //  let newTask  = e.target.parentNode;
        //  newTask.removeChild(paragraph);
        // //  inputField.paragraph.e.target.parentNode;
        // //  inputField.removeChild(paragraph)
        

    })
  
    
    // var paragraph= document.createElement('p')
    //     paragraph.innerText = inputField.value;
    //     toDoContainer.appendChild(paragraph);
// };

// for(let i=10; i<deleteBtn.length; i++){
//     deleteBtn[i].onclick = function(){
//         this.parentNode.remove();
//     }
// }
















// addToDoButton.addEventListener('click',  function(){
    
//     var paragraph = document.createElement('p')
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
    
// });



// document.getElementById(addToDoButton).onclick = function(){
//     if(document.getElementById(inputField).value.length == 0){
//         alert('Please Enter a task')
//     }

// }
// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newTask input').value.length == 0){
//         alert('Please Enter a Task')
//     }
//     else{
//    document.querySelector('#task').innerHTML += `
//      <div class="task">
//      <span id="taskname">
//      ${document.querySelector('#newTask input').value}
//      </span>
//      <button class="delete">
//      <i class="far fa-trash-all"></i></button>
//      </div>
//      `;
//         var current_task = document.querySelectorAll(".delete");
//         for(var i=0; i<current_task.length; i++){
//             current_task[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     };
 
// };