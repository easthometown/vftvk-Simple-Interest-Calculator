function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
         alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (rate /100)+1;
    for(i=0;i<years;i++){
        interest = interest*interest;
    }
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest*pprincipal;
    var t1="<mark>";
    var t2="</mark>";
    
    document.getElementById("result").innerHTML=
        "If you deposit "
        +t1+principal+t2+
        ",\<br\>at an interest rate of "
        +t1+rate+t2+
        "%\<br\>You will receive an amount of "
        +t1+amount+t2+
        ",\<br\>in the year "
        +t1+year+t2+
        "\<br\>";
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

    
}

