
//EVENT LISTENER
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);
function myfirst(){
//Get user input 1
var userinput1 = document.getElementById("input1").value;
//Write output 1 onto webpage
document.getElementById("demo").innerHTML = userinput1;
}
  