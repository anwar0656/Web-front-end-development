
let usliquidgallon  = document.getElementById("usliquidgalllon");
let cubicmeter      = document.getElementById("cubicmeter");
let liter           = document.getElementById("liter");
let milliliter      = document.getElementById("milliliter");
let cubicfoot       = document.getElementById("cubicfoot");
let cubicinch       = document.getElementById("cubicinch");
let fluidounce      = document.getElementById("fluidounce");


function usliquidgalllonToOther(val){
    cubicmeter.value = val/264.2;
    liter.value      = val*3.785;
    milliliter.value = val*3785;
    cubicfoot.value  = val/7.48;
    cubicinch.value  = val*231;
    fluidounce.value = val*128;
}

function cubicmeterToOther(val){
    usliquidgallon.value    = val*264.2;
    liter.value             = val*1000;
    milliliter.value        = val*1e+6;
    cubicfoot.value         = val*35.315;
    cubicinch.value         = val*61020;
    fluidounce.value        = val*33810;
   
}

function literToOther(val){
    usliquidgallon.value     = val/3.785;
    cubicmeter.value         = val/1000;
    milliliter.value         = val*1016;
    cubicfoot.value          = val/28.317;
    cubicinch.value          = val*61.024;
    fluidounce.value         = val*33.814;
}

function milliliterToOther(val){
    usliquidgallon.value     = val/3785;
    cubicmeter.value         = val/1e+6;
    liter.value              = val/1000;
    cubicfoot.value          = val/28320;
    cubicinch.value          = val/16.387;
    fluidounce.value         = val/29.574;
}

function cubicfootToOther(val){
    usliquidgallon.value    = val*7.481;
    cubicmeter.value        = val*35.315;
    liter.value             = val*28.317;
    milliliter.value        = val*28320;
    cubicinch.value         = val*1728;
    fluidounce.value        = val*957.5;
}

function cubicinchToOther(val){
    usliquidgallon.value     = val/231;
    cubicmeter.value         = val/61020;
    liter.value              = val/61.024;
    milliliter.value         = val*16.387;
    cubicfoot.value          = val/1728;
    fluidounce.value         = val/1.805;
}

function fluidounceToOther(val){
    usliquidgallon.value    = val/128;
    cubicmeter.value        = val/33810;
    liter.value             = val/33.814;
    milliliter.value        = val*29.574;
    cubicfoot.value         = val/957.5;
    cubicinch.value         = val*1.805;
}

function convertToOther(convertFrom,value){
   switch(convertFrom){
    case "usliquidgalllon"       :usliquidgalllonToOther(parseFloat(value)); break;
    case "cubicmeter"           : cubicmeterToOther(parseFloat(value)); break;
    case "liter"                : literToOther(parseFloat(value)); break;
    case "milliliter"           : milliliterToOther(parseFloat(value)); break;
    case "cubicfoot"            : cubicfootToOther(parseFloat(value)); break;
    case "cubicinch"            : cubicinchToOther(parseFloat(value)); break;
    case "fluidounce"           : fluidounceToOther(parseFloat(value)); break;
   } 
}

