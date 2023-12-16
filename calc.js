
var screen = document.getElementById("screen");

function btnClick(value){
    screen.value += value;

}

function clearScreen(){
    screen.value ="";
}

function findResult(){
    var result=eval(screen.value);
    screen.value=result;
}
function deleteNUm(){
    var del =screen.value.toString().slice(0,-1);
    screen.value=del;
}