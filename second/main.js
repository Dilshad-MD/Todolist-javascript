function addMore(){
    document.getElementById('error').innerHTML="";

    let name=document.getElementById('name').value;
    if(name == ''){
       
        document.getElementById('error').innerHTML="Please Enter A Task";

    }else{
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent=name;
        box.appendChild(li);
    }
}
