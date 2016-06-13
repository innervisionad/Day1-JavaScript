
var event1 = document.getElementById("button1");
event1.addEventListener('click',add,false);

function add(){
var userinput1 = document.getElementById("input1").value;
var userinput2 = document.getElementById("input2").value;
var total = parseInt(userinput1) + parseInt(userinput2);
document.getElementById("demo").innerHTML = total.toString();
}
  