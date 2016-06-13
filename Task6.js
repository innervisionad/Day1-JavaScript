
var event1 = document.getElementById("button1");
event1.addEventListener('click',add,false);

function add(){
var userinput1 = document.getElementById("input1").value;
var userinput2 = document.getElementById("input2").value;
var int1 = parseInt(userinput1);
var int2 = parseInt(userinput2);
//var total = parseInt(userinput1) + parseInt(userinput2);  
var output = "";
    
if(int1 === int2){
     output = "It's the same!";
}
else{
     output = "It's different!";
}    
   
    
document.getElementById("demo").innerHTML = output;
}
  