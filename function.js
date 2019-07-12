function lunchtime(studentname){
    console.log('stop working ' + studentname + '.',);
    console.log('its time for lunch '+ time );
    console.log('its period ' + period)

}
let studentname = process.argv[2];
let time = process.argv[3];
let period= process.argv[4]
lunchtime(studentname, time, period);