



let input=document.querySelector("input")
let res=document.querySelector(".result")
function getdata(){
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=cafa1e0f9a64713a1afe51a3a39cb802&units=metric`)
.then(data=>data.json())
.then(result=>{return show(result)})
}


function show(w){
    console.log(w);
    res.innerHTML=`${w.name}<br>${Math.trunc(w.main.temp)}<br>${w.sys.country}<br>${Math.trunc(w.main.feels_like)}`
    
    var body=document.querySelector('.container').style

    if(w.weather[0].main == "Clear"){
         body.backgroundImage="url('./img/clear.jpg')";
         backgroundSize = "100% 100%";
    }
    else if(w.weather[0].main == "Clouds"){
        body.backgroundImage="url('./img/cloud.jpg')"
        backgroundSize="100% 100%"

    }
    else if(w.weather[0].main == "Smoke" || w.weather[0].main == "Haze") {
        body.backgroundImage="url('./img/smoke.jpg')"
        backgroundSize="100% 100%"
    }
    else if(w.waether[0].main == "Rain"  ){
        body.backgroundImage="url('./img/rainy.jpg')"
        body.backgroundSize="100% 100%";

    }
    else if(w.weather[0].main == "Thunderstorm"){
        body.backgroundImage="url('./img/thunder.jpg')"
        body.backgroundSize="100% 100%";
    }
    // else{
    //     body.backgroundImage="url('./img/beach.jpg')"
    //     body.backgroundSize="100% 100%";
    // }



    var date=new Date ()
      console.log(Date);
    var day= date.getDay();
    var month= date.getMonth();
    var year= date.getFullYear();
    var date1= date.getDate();

    var  DayN = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var MonthN= ['January', 'February', 'March','April','May','June','July','August','September','Octuber','November','December']

    let datadiv= document.getElementById('date').innerHTML = `${date1}, ${day[DayN]}, ${month[MonthN]}, ${year}`


   

    
}