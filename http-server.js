let http = require( "http" );

const PORT = 3000;

let capitals = {
	"/canada" : "ottawa",
	"/france" : "paris",
	"/england" : "london",
	"/south-africa" : "cape town"
}

function requestHandler( request , response ) {
	if ( request.url && capitals[ request.url ] ) {
		response.end( capitals[ request.url ] );
	}
	else if ( request.url === '/all' ) {
		response.end( JSON.stringify( capitals ) );
	}
	else {
		response.statusCode = 404;
		response.end( "I do not have a capital city for that");
	}
}

let httpServer = http.createServer( requestHandler );
httpServer.listen( PORT , function onServerStart( ) {
	console.log( "HTTP server is listening on port " , PORT );
});







