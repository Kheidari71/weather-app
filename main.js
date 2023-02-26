//target needed input and output
var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");
var img=document.getElementById("imgPlace");
const apiKey = "dfbbcc7841cd44c4add200519230102";

//get data from weatherap by async function
async function GetWeather(){
var weatherResult=await (await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput.value}&aqi=no`)).json();
SetInfo(weatherResult)
}

//by clicking submit data displays
addInput.addEventListener('click',GetWeather)

//get name of the city,description with related icon,temp, wind kph and set data on variable innerhtml
function SetInfo(data){
  var name=data["location"]["name"];
  var description=data["current"]["condition"]["text"];
  var temperature=data["current"]["temp_c"];
  var wind=data["current"]["wind_kph"];

  //display icon
 img.innerHTML=`<img src= ${data.current.condition.icon} alt=${data.current.condition.text}>`;

   //display city name
 cityOutput.innerHTML=`City : ${name}`;

   //display descriptions
  descOutput.innerHTML=`Description : ${description}`;

   //display temperature by C.
  tempOutput.innerHTML=`Temperature : ${temperature} C`;

   //display wind kph
  windOutput.innerHTML=`Wind : ${wind} kph`;
}




