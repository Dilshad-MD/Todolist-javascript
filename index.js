
let addToDoButton = document.getElementById('push');
let toDoContainer = document.getElementById('tasks');
let inputField = document.getElementById('newTask1');
let newTask = document.getElementById('newTask')
let id = 1;
addToDoButton.onclick = function(){
    document.getElementById('error').innerText = "";    
    if(inputField.value.length == 0){                    
       document.getElementById('error').innerText = "Please Enter A Task"
    }
    else{
        
        let paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        let a = document.createElement('a');
        a.textContent="x";
        a.href = "javascript:void(0)";
        a.className = "remove";
        let temp = id++;
        paragraph.id = temp;
        a.onclick = function(){
            let par = document.getElementById(temp);
            par.remove();
        }
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



















