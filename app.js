//. app.js

var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    bodyParser = require( 'body-parser' ),
    ejs = require( 'ejs' ),
    app = express();
var settings = require( './settings' );

var appEnv = cfenv.getAppEnv();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/public' );
app.set( 'view engine', 'ejs' );


app.get( '/', function( req, res ){
  res.render( 'index', { wshost: settings.wshost } );
});


app.listen( appEnv.port );
console.log( "server stating on " + appEnv.port + " ..." );
