//converter fahrenhiet && celius
function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum- 32) * 5 / 9; 
    //when we want to convert we shall to subtraction the value what we put on box from 32 and the result will multiplied by 5/9 and the final result it's the degree
  } 
  function temperatureConverter2(valNum1) {
    valNum1 = parseFloat(valNum1);
    document.getElementById("outputFahrenheit").innerHTML = (valNum1*9 / 5 + 32);
    //when we want to convert we shall to multipied  the value what we put on box by 9/5 and plus 32 and the final result it's the degree
  } 