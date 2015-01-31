var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var mongoose = require('mongoose');
var config = require('./server/config');
var path = require('path'); // node module required to pass HTML files
var logger = require('morgan');
var bodyParser = require('body-parser'); // body parsing middleware
var Proposal = require('./server/models/proposal');
// var routes = require('./server/routes/api.admin');

mongoose.connect(config.database, function( err, res ) {
    if ( err ) {
        console.log('ERROR connecting to: ' + config.database + '. ' + err);
    }
    else {
        console.log('Succeeded in connecting to: ' + config.database);
    }
});

var db = mongoose.connection;

// Mongoose event listeners
db.on('error', function( msg ) {
    console.log('db connection failed.');
});

db.once('open', function() {
    console.log('db connection succeeded');
});

//set the views directory and the view engine
app.set('views', path.join(__dirname + '/public/views'));
app.set('view engine', 'jade');

/* Get the model and display it in the response
app.get('/', function( req, res ) {
    Proposal.find(function( err, proposal ) {
        res.send(proposal);
    })
});
*/

// express module that logs all requests to the console
// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// set the static file location to the public director used for requests that our frontend will make
app.use(express.static(path.join(__dirname + '/public')));

app.get('partials/:partialPath', function( req, res ) {
    res.render('partials/' + req.params.partialPath);
    console.log('Express is routing the partials with the partialPath of: ' + req.params.partialPath);
});

app.get('/', function( req, res ) {
    res.render('index');
    console.log('I\'m rendering the index page now in the \'*\' function.');
});

// app.use('*', routes);

app.listen(config.port);
console.log('My magic happens on port: ' + config.port);

