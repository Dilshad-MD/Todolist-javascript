// console.log('hello') https://www.w3schools.com/js/pic_bulbon.gif

let turnOn = document.getElementById('onBtn');
let bulb = document.getElementById('bulb');
let bulbOn = false;
turnOn.addEventListener('click', ()=>{  
    if(bulbOn){
        bulbOn = false;
        turnOn.innerText = 'Turn On';
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif" ;
    }else{
        bulbOn = true;
        turnOn.innerText = "Trun Off";
        bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    }
    console.log(bulbOn);
});