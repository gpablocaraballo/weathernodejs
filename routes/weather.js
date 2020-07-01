'use strict'

var express     = require( 'express'             );
var weather     = require( '../controllers/weather' );
var api         = express.Router();

api.get ( '/current'        , weather.current );
api.get ( '/current/:city'  , weather.current );
api.get ( '/forecast'       , weather.forecast );
api.get ( '/forecast/:city' , weather.forecast );
api.get ( '/location'       , weather.location );

module.exports = api;