
let sqfeet = document.getElementById("sqfeet");
let sqmeter = document.getElementById("sqmeter");
let sqinches = document.getElementById("sqinches");
let sqyard  = document.getElementById("sqyard");
let sqkm  = document.getElementById("sqkm");
let sqmile = document.getElementById("sqmile");
let hectare  = document.getElementById("hectare");
let acre = document.getElementById("acre");


function sqfeetToOther(val){
    sqmeter.value     = val/10.764;
    sqinches.value    = val*144;
    sqyard.value      = val/9;
    sqkm.value        = val/10760000;
    sqmile.value      = val/27880000;
    hectare.value     = val/107600;
    acre.value        = val/43560;
}

function sqmeterToOther(val){
    sqfeet.value      = val*10.764;
    sqinches.value    = val*1550;
    sqyard.value      = val*1.196;
    sqkm.value        = val/1000000;
    sqmile.value      = val/2590000;
    hectare.value     = val/10000;
    acre.value        = val/4047;
}

function sqinchesToOther(val){
    sqfeet.value      = val/144;
    sqmeter.value     = val/1550;
    sqyard.value      = val/1296;
    sqkm.value        = val/1550000000;
    sqmile.value      = val/4014000000;
    hectare.value     = val/15500000;
    acre.value        = val/6273000;
}

function sqyardToOther(val){
    sqfeet.value      = val*9;
    sqmeter.value     = val/1.196;
    sqinches.value    = val*1296;
    sqkm.value        = val/1.196e+6;
    sqmile.value      = val/3.098e+6;
    hectare.value     = val/11960;
    acre.value        = val/4840;
}

function sqkmToOther(val){
    sqfeet.value      = val*1.076e+7;
    sqmeter.value     = val*1e+6;
    sqinches.value    = val*1296;
    sqyard.value      = val*1.55e+9;
    sqmile.value      = val/2.59;
    hectare.value     = val*100;
    acre.value        = val*247.1;
}

function sqmileToOther(val){
    sqfeet.value      = val*2.788e+7;
    sqmeter.value     = val*2.59e+6;
    sqinches.value    = val*4.014e+9;
    sqyard.value      = val*3.098e+6;
    sqkm.value        = val*2.59;
    hectare.value     = val*259;
    acre.value        = val*640;
}

function hectareToOther(val){
    sqfeet.value      = val*107600;
    sqmeter.value     = val*10000;
    sqinches.value    = val*1.55e+7;
    sqyard.value      = val*11960;
    sqkm.value        = val*100;
    sqmile.value      = val/259;
    acre.value        = val*2.471;
}

function acreToOther(val){
    sqfeet.value      = val*43560;
    sqmeter.value     = val*4047;
    sqinches.value    = val*6.273e+6;
    sqyard.value      = val*4840;
    sqkm.value        = val/247.1;
    sqmile.value      = val/640;
    hectare.value     = val/2.471;
}




function convertToOther(convertFrom,value){
   switch(convertFrom){
    case "sqfeet" : sqfeetToOther(parseFloat(value)); break;
    case "sqmeter" : sqmeterToOther(parseFloat(value)); break;
    case "sqinches" : sqinchesToOther(parseFloat(value)); break;
    case "sqyard" : sqyardToOther(parseFloat(value)); break;
    case "sqkm" : sqkmToOther(parseFloat(value)); break;
    case "sqmile" : sqmileToOther(parseFloat(value)); break;
    case "hectare" : hectareToOther(parseFloat(value)); break;
    case "acre" : acreToOther(parseFloat(value)); break;


   } 
}

