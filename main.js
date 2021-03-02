var cur_temp_c = 40;
var cur_temp_f = 100;

var in_f = (cur_temp_c * 9);
in_f = in_f / 5;
in_f = in_f + 32;


var in_c = (cur_temp_f - 32);
in_c = in_c * 5;
in_c = in_c / 9;  

document.write(cur_temp_c + " in Celsius will be " + in_f + '\u00B0' + 'F. ' );
document.write("<br>"); 
document.write(cur_temp_f + '\u00B0' +" in Fahrenheit will be " + in_c.toFixed(1) + '\u00B0' + 'C.' );