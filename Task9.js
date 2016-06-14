//Collect a number from the user and display on the webpage if the number is negative, less than 10 or more than 10
var event1 = document.getElementById("button1");
event1.addEventListener('click',add,false);

function add(){
var userinput1 = document.getElementById("input1").value;
var int1 = parseInt(userinput1);

if(int1 <10 && int1>=0){
    output = "It's less than 10!";
}
else if(int1 > 10){
    output = "It's greater than 10!";
}
else if(int1<0){
    output = "It's a negative!";
}
else {
     output = "It's 10!";
}
   

//var output = calc1 - calc2;    
    
    
//var total = parseInt(userinput1) + parseInt(userinput2);  

//var upNum = int1 + 1;
//var downNum = int1 - 1;

    
document.getElementById("difference").innerHTML = output;

}
  