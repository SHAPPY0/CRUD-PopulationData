var express 		= require('express');
var bodyParser 		= require('body-parser');
var logger 			= require('morgan'); 
var path 			= require('path');
var errorHandler    = require('errorhandler');
var app 			= express();
var server 			= require('http').createServer(app);
var errorFn         = require('./modules/error'); 


app.use(logger('dev'));

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '100mb'}));

app.use(errorFn);
app.set('env','development')  ;
app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public'))); 

 
 //devlopment config
if (app.get('env') === 'development') {
    app.use(errorHandler());
}
require('./modules')(app);
 
app.all('*', function(req, res) {
    res.sendfile('public/index.html');  
});

server.on('error', function(err){
	process.exit(1);
}).listen(app.get('port'), function(){
	console.log('App is running at: '+app.get('port'))
});

module.exports = app;