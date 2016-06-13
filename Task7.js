
var event1 = document.getElementById("button1");
event1.addEventListener('click',add,false);

function add(){
var userinput1 = document.getElementById("input1").value;
var int1 = parseInt(userinput1);
//var total = parseInt(userinput1) + parseInt(userinput2);  

var upNum = int1 + 1;
var downNum = int1 - 1;

    
document.getElementById("upnum").innerHTML = upNum;
document.getElementById("downnum").innerHTML = downNum;
}
  