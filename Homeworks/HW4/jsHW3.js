const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

fetch("https://worldtimeapi.org/api/timezone/"+tz)
  .then(response => response.json())
  .then(data => console.log(tz,data.dst,data.datetime));


function gettime()
{
    
   fetch("https://worldtimeapi.org/api/ip")
  .then(response => response.json())
  .then(data => console.log(data.dst,data.datetime));
   
}
document.getElementById("time2").innerHTML = gettime();

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}