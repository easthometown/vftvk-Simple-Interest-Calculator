var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function compute()
{
   document.getElementById("result").innerHTML="If you deposit "
   if(principal<=0){
      alert("Enter a positive number")
      document.getElementById("principal").focus();
      return false;
   }
   
       
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

