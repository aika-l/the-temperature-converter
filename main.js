var cur_temp_c = 40;
var in_f = (cur_temp_c * 9)/5+32;


// converting temp in F to C for the range -100 to 100
const min=-100;
const max=100;
const cur_temp_f = Math.floor(Math.random()*(max-min+1))+min;
var in_c = (cur_temp_f - 32)*5/9;


document.write(cur_temp_c + " \u00B0C will be " + in_f + '\u00B0F. ' );
document.write("<br>"); 
document.write('It is ' + cur_temp_f + '\u00B0F today. That is ' + in_c.toFixed(1)  + '\u00B0C.');

