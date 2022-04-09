function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    i = p * y * r /100;
    var year = new Date().getFullYear()+parseInt(y);
    
    document.getElementById("result").innerHTML="If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of<mark>"+r+"</mark>%\<br\>You will receive an amount of <mark>"+i+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    
}
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

    
}
function myFunction() {
    let age = document.getElementById("principal").value;
    let voteable = (age = 0) ? "Enter number":"Thanks";
    document.getElementById("null").innerHTML = voteable + " to vote.";
  }
