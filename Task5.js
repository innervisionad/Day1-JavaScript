
var event1 = document.getElementById("button1");
event1.addEventListener('click',add,false);

function add(){
var userinput1 = document.getElementById("input1").value;
var userinput2 = document.getElementById("input2").value;
var int1 = parseInt(userinput1);
var int2 = parseInt(userinput2);
//var total = parseInt(userinput1) + parseInt(userinput2);  

if(int1 > int2){
    var biggest = int1;
}
else{
    var biggest = int2;
}    
   
    
document.getElementById("demo").innerHTML = biggest.toString();
}
  