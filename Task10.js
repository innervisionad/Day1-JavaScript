//Collect 2 numbers form a user and display on the webpage if one of them or both of them are greater than 10
var event1 = document.getElementById("button1");
event1.addEventListener('click', check, false);

var output;

function check(){

var int1 = parseInt(document.getElementById("input1").value);
var int2 = parseInt(document.getElementById("input2").value);


    
if(int1 >10 && int2 > 10){
    output = "Both values are greater than 10!";
}
else if(int1 > 10 || int2 > 10){
    output = "Only one value is greater than 10!";
}
else{
    output = "Neither value is greater than 10";
}

document.getElementById("check1").innerHTML =  output;
    
}