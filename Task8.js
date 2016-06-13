
var event1 = document.getElementById("button1");
event1.addEventListener('click',add,false);

function add(){
var userinput1 = document.getElementById("input1").value;
var userinput2 = document.getElementById("input2").value;
var userinput3 = document.getElementById("input3").value;
var int1 = parseInt(userinput1);
var int2 = parseInt(userinput2);
var int3 = parseInt(userinput3);

var calc1 = (int1 + int2) * int3;
var calc2 = int1 + int2 + int3;

var output = calc1 - calc2;    
if(output < 0)  {
    output = -output;
} 
    
//var total = parseInt(userinput1) + parseInt(userinput2);  

//var upNum = int1 + 1;
//var downNum = int1 - 1;

    
document.getElementById("difference").innerHTML = output;

}
  