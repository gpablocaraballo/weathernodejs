var Environment = require( '../utilities/environtment'  );

//PONGA SU TOKEN DE https://openweathermap.org/api AQUI ABAJO
//PUT YOUR TOKEN FROM https://openweathermap.org/api DOWN HERE
var open_weather_token = '93f5a07af1188c18f5265bf49b432f7e';

function getToken(){
    //token could change base on the environment
    let tokens = {
        "development":open_weather_token,
        "production":open_weather_token //could be other for production environtment
    };
    return tokens[getEnv()];
}
function getEnv(){
    return (process.env.NODE_ENV)?process.env.NODE_ENV:"development";
}
function getPath(pkey){
    return Environment[getEnv()];
}
//Return the param x with trim regex applied.
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
module.exports = { 
    getEnv,getPath,getToken,myTrim
}
