const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

fetch("https://worldtimeapi.org/api/timezone/"+tz)
  .then(response => response.json())
  .then(data => console.log(tz,data.dst,data.datetime));


function gettime()
{
    
   fetch("https://worldtimeapi.org/api/ip")
  .then(response => response.json())
  .then(data => console.log(data.dst,data.datetime));

  return;
   
}
const random = async() => {
  response = await  fetch("https://worldtimeapi.org/api/ip")
  .then(response => response.json())
  .then(data => console.log(data.dst,data.datetime));

  
  data = await response.json();
  //console.log(data);
  document.getElementById("time2").innerHTML = data;
  return data;
};




setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

setInterval(()=>{
let hh = document.getElementById('hh')
, mm = document.getElementById('mm')
, ss = document.getElementById('ss');

let sec_dot = document.querySelector('.sec_dots'),
    min_dot = document.querySelector('.min_dots'),
    hr_dot = document.querySelector('.hr_dots');

let hours =document.getElementById('hours'),
    minutes =document.getElementById('minutes'),
    secounds =document.getElementById('secounds'),
    ampm =document.getElementById('ampm');

let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds();
    let am= h>=12 ? "pm" : "am";
    
    //convert 24hr clock to 12hr clock
   if(h > 12){
      h = h -12;
    }
    //h = (h>12)? h - 12 :h;
    //add 0 before single digit number
    h = (h<10)? "0"+ h : h;
    m = (m<10)? "0"+m :m;
    s = (s<10)? "0"+s :s;

    hours.innerHTML= h;
    minutes.innerHTML= m;
    secounds.innerHTML= s;
    ampm.innerHTML=am;

    hh.style.strokeDashoffset = 510 -(510 * h) / 12;
    // 12 hours clock
    mm.style.strokeDashoffset = 630 -(630 * m) / 60;
    // 60 minutes clock
    ss.style.strokeDashoffset = 760 -(760 * s) / 60;
    // 60 secound clock

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    //360 /60sec = 6
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    //360 /60min = 6
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;
    //360 /60sec = 6
})

