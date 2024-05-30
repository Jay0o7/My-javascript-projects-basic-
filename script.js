const display = document.getElementById("display");

function displayValue(input){
    display.value += input;
}
function displayClear(){
    display.value = "";
}
function displayPop(){
    let del = String(display.value).slice(0,-1);
    display.value = del;
}
function displayCalculate(){
    try{
        display.value = eval(display.value);
    }   
    catch(error){
        display.value = "Error";
    }
}