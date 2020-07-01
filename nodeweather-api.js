'use strict'

var app      = require( './app' );
var port     = process.env.PORT || 8080
var Util   = require( './utilities/util'  );
var entorno = Util.getEnv();
app.listen( port, () => console.log( `Weather API Node - Caraballo Pablo - listening on port ${port} environment: ${entorno}` ) );
