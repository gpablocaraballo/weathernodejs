'use strict'
var axios    = require( 'axios' );
var Util   = require( '../utilities/util' );

/***********************************************************************************
****************** Funciones invocadas en las rutas ********************************
************************************************************************************/

const getGeo = async () => {    
    let url     = Util.getPath().geo_url;
    const output = await axios.get(url);
    let data = output.data
    return data
}
const getRequest = async (city,salida) => {    
    let url     = Util.getPath().weather_url + salida;
    let lat = "";
    let lon = "";
    let backurl;

    if (city !== "0"){
        backurl = url + "?id=" + city;
    }else{
        //let resgeo = await getGeo();
        await getGeo().then(res => {
            console.log('res getGeo',res);
            lat = res.lat;
            lon = res.lon;
            backurl = url + "?lat=" + lat + "&lon=" + lon;
        })
    }
    backurl += "&APPID="+Util.getToken();

    console.log('getRequest',backurl);

    const output = await axios.get(backurl);
    
    let data = output.data
    return data
}
const current = async ( req, res ) => {
    let city = (req.params.city)?req.params.city:"0";
    doRequest(req,res,city,"weather");
}
const forecast = async ( req, res ) => {
    let city = (req.params.city)?req.params.city:"0";
    doRequest(req,res,city,"forecast");
}
const doRequest = async ( req, res, city, output ) => {
    getRequest(city,output)
    .then(response => {
        console.log('doRequest response city:' + city + ' output:' + output,response);
        res.status( 200 ).send( { cod: 0, entity: response });
    })
    .catch(err => {
        console.log('Error doRequest',err);
        res.status( 200 ).send( { cod: 1, msg: `Error consultando la api de clima` } ); 
    })

}
const location = async ( req, res ) => {
    getGeo()
    .then(response => {
        res.status( 200 ).send( { cod: 0, entity: response });
    })
    .catch(err => {
        console.log('Error location',err);
        res.status( 200 ).send( { cod: 1, msg: `Error consultando la api location` } ); 
    })
}
module.exports = { 
    current,forecast,location
}