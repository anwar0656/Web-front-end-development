
let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");


function celciusToOther(val){
    fahrenheit.value = (val*1.8)+32;
    kelvin.value = val+273.15;

}

function fahrenheitToOther(val){
    celcius.value = (val-32)/1.8;
    kelvin.value = ((val-32)/1.8)+273.15;
}

function kelvinToOther(val){
    celcius.value = (val-273.15);
    fahrenheit.value = ((val-273.15)*1.8)+32;
}

function convertToOther(convertFrom,value){
   switch(convertFrom){
    case "celcius" : celciusToOther(parseFloat(value)); break;
    case "fahrenheit" : fahrenheitToOther(parseFloat(value)); break;
    case "kelvin" : kelvinToOther(parseFloat(value)); break;
   } 
}

