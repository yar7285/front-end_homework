var button1 = document.querySelector('.btn1');
function firstbtn(e) {
var txt = document.querySelector('.get1');
    var buttons1 = document.getElementById('e');
    if(txt === buttons1){
    txt.setAttribute('style','background-color: red');
        buttons1.removeAttribute('id','e');
        return;
    }
    if( txt !== buttons1){
        txt.removeAttribute('style','background-color: red');
        buttons1 = document.body.children[1].children[0].id = 'e';
        return;
    }
    console.log(txt);
    console.log(buttons1);
}
button1.addEventListener('mousedown', firstbtn, false);

var button2 = document.querySelector('.btn2');
function lastbtn(e) {
    var txt = document.querySelector('.get4');
    var buttons1 = document.getElementById('y');
//    var prop = document.body.children[1].children[3];
    if(txt === buttons1){
    txt.setAttribute('style','background-color: red');
        buttons1.removeAttribute('id','y');
        return;
    }
    if( txt !== buttons1){
        txt.removeAttribute('style','background-color: red');
        buttons1 = document.body.children[1].children[3].id = 'y';
        return;
    }
}
button2.addEventListener('mousedown', lastbtn, false);


var button3 = document.querySelector('.btn3');
function nextel(e) {
    var buttons = document.querySelectorAll('.get');
    var buttons1 = document.getElementById('e');
    var buttons2 = document.getElementById('r');
    var buttons3 = document.getElementById('t');
    var buttons4 = document.getElementById('y');
    
if(buttons[0] === buttons1){
    buttons[0].setAttribute('style','background-color: orange');
    buttons1.removeAttribute('id','e');
    return;
}
    if(buttons[1] === buttons2){
    buttons[1].setAttribute('style','background-color: orange');
    buttons[0].removeAttribute('style','background-color: orange');
    buttons[1].removeAttribute('id','r');
        return;
}
    if(buttons[2] === buttons3){
    buttons[2].setAttribute('style','background-color: orange');
    buttons[1].removeAttribute('style','background-color: orange');
    buttons[2].removeAttribute('id','t');
        return;
}
     if(buttons[3] === buttons4){
    buttons[3].setAttribute('style','background-color: orange');
    buttons[2].removeAttribute('style','background-color: orange');
    buttons[3].removeAttribute('id','y');
         return;
}
    if(buttons1 === null && buttons2 === null && buttons3 === null && buttons4 === null){
        buttons1 =document.body.children[1].children[0].id = 'e';
        buttons2 =document.body.children[1].children[1].id = 'r';
        buttons3 =document.body.children[1].children[2].id = 't';
        buttons4 =document.body.children[1].children[3].id = 'y';
        buttons[3].removeAttribute('style','background-color: orange');
        return;
    }
           
}
 button3.addEventListener('mousedown', nextel, false);




var button4 = document.querySelector('.btn4');
function previousel(e) {
    var buttons = document.querySelectorAll('.get');
    var buttons1 = document.getElementById('y');
    var buttons2 = document.getElementById('t');
    var buttons3 = document.getElementById('r');
    var buttons4 = document.getElementById('e');
    
if(buttons[3] === buttons1){
    buttons[3].setAttribute('style','background-color: orange');
    buttons1.removeAttribute('id','e');
    return;
}
    if(buttons[2] === buttons2){
    buttons[2].setAttribute('style','background-color: orange');
    buttons[3].removeAttribute('style','background-color: orange');
    buttons[2].removeAttribute('id','r');
        return;
}
    if(buttons[1] === buttons3){
    buttons[1].setAttribute('style','background-color: orange');
    buttons[2].removeAttribute('style','background-color: orange');
    buttons[1].removeAttribute('id','t');
        return;
}
     if(buttons[0] === buttons4){
    buttons[0].setAttribute('style','background-color: orange');
    buttons[1].removeAttribute('style','background-color: orange');
    buttons[0].removeAttribute('id','y');
         return;
}
     if(buttons1 === null && buttons2 === null && buttons3 === null && buttons4 === null){
        buttons1 =document.body.children[1].children[0].id = 'e';
        buttons2 =document.body.children[1].children[1].id = 'r';
        buttons3 =document.body.children[1].children[2].id = 't';
        buttons4 =document.body.children[1].children[3].id = 'y';
        buttons[0].removeAttribute('style','background-color: orange');
        return;
    }
}
 button4.addEventListener('mousedown', previousel, false);
