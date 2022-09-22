//sum&min simple math prossecc
    var number1 =parseFloat(document.getElementById("n1").value);
    var number2 =parseFloat(document.getElementById("n2").value);
    //var resultsum =parseFloat(number1)+parseFloat(number2);
   // var resultmin =parseFloat(number2)-parseFloat(number2);

   //define a function to can make the output of result
function sumcalc()
{
      /* if (! isNaN(resultsum))
        {
            document.getElementById("answer").innerHTML = resultsum;
        }*/
        number1 =parseFloat(document.getElementById("n1").value);
        number2 =parseFloat(document.getElementById("n2").value)
        document.getElementById("answer").innerHTML = number1 + number2;
}
function mincalc()
{
   /* if (! isNaN(resultmin))
    {
        document.getElementById("answer").innerHTML = resultmin;
        
    }*/
    number1 =parseFloat(document.getElementById("n1").value);
    number2 =parseFloat(document.getElementById("n2").value)
    document.getElementById("answer").innerHTML = number1-number2;
}