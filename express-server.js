let express = require( "express" );
let usersDB = require( "./data/users.js" );
let bodyParser = require( "body-parser" );

const PORT = 8080;

let server = express( );
server.set( "view engine" , "ejs" );
server.use( bodyParser.urlencoded( { extended : true } ) );

server.get( "/users" , function( req , res ) {
	res.render( "users" , { users : usersDB.getAll( ) } ); 
});

server.get( "/user/:id" , function( req , res ) {
	console.log( "user object" , usersDB.getById( req.params.id ) );
	res.render( "profile" , {  user : usersDB.getById( req.params.id ) } );
});

server.get( "/filter" , function ( req , res ) {
	res.render( "filter" , { } );
});

server.post( "/filter" , function( req , res ) { 
	res.render( "users" , { users : usersDB.filterByName( req.body.filter ) } ); 
});




server.listen( PORT , function anyName( ) {
	console.log( "Express server listening on port " , PORT );
});