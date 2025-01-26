
let ton = document.getElementById("ton");
let kg = document.getElementById("kg");
let gram = document.getElementById("gram");
let mg  = document.getElementById("mg");
let imperial  = document.getElementById("imperial");
let uston  = document.getElementById("uston");
let pound = document.getElementById("pound");
let ounce = document.getElementById("ounce");

function tonToOther(val){
    kg.value     = val*1000;
    gram.value    = val*1e+6;
    mg.value        = val*1e+9;
    imperial.value      = val/1.016;
    uston.value        = val*1.102;
    pound.value      = val* 2205;
    ounce.value      = val*35270
;
}

function kgToOther(val){
    ton.value     = val/1000;
    gram.value    = val*1000;
    mg.value        = val/1e+6;
    imperial.value  = val*1016;
    uston.value        = val/ 907.2;
    pound.value      = val*2.205;
    ounce.value      = val*35.274;
}

function gramToOther(val){
    ton.value     = val/1e+6;
    kg.value    = val/1000;
    mg.value        = val*1000;
    imperial.value      = val/1016;
    uston.value        = val/ 907.2;
    pound.value      = val*2.205;
    ounce.value      = val*35.274;
}

function mgToOther(val){
    ton.value     = val/1e-9;
    kg.value       = val/1e-6;
    gram.value        = val/1000;
    imperial.value      = val*1.016e+9;
    uston.value        = val/9.072e+8;
    pound.value      = val/453600;
    ounce.value      = val*28350;
}

function imperialToOther(val){
    ton.value     = val/1.016;
    kg.value    = val*1016;
    gram.value        = val*1.016e+6;
    mg.value      = val*1.016e+9;
    uston.value        = val/1.12;
    pound.value      = val* 2240;
    ounce.value      = val*35840;
}

function ustonToOther(val){
    ton.value     = val/1.102;
    kg.value    = val*907.2;
    gram.value        = val/ 907200;
    mg.value      = val*9.072e+8;
    imperial.value        = val/1.12;
    pound.value      = val*2000;
    ounce.value      = val*32000;
}

function poundToOther(val){
    ton.value     = val/2205;
    kg.value    = val*2.205;
    gram.value        = val/453.6;
    mg.value      = val*453600;
    imperial.value        = val/2240;
    uston.value      = val/2000;
    ounce.value      = val*16;
}

function ounceToOther(val){
    ton.value     = val/3;
    kg.value    = val*12;
    gram.value        = val/0.032808;
    mg.value      = val*0.33333;
    imperial.value        = val/3280.8;
    uston.value      = val*0.000189394;
    pound.value      = val*0.000189394;
}

function convertToOther(convertFrom,value){
   switch(convertFrom){
    case "ton"      : tonToOther(parseFloat(value)); break;
    case "kg"       : kgToOther(parseFloat(value)); break;
    case "gram"     : gramToOther(parseFloat(value)); break;
    case "mg"       : mgToOther(parseFloat(value)); break;
    case "imperial" : imperialToOther(parseFloat(value)); break;
    case "uston"    : ustonToOther(parseFloat(value)); break;
    case "pound"    : poundToOther(parseFloat(value)); break;
    case "ounce"    : ounceToOther(parseFloat(value)); break;
   } 
}

