// Import useful node libraries
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT ||5000;

// Settting the view (template) engine
// Setting the 'views'value to specify the folder where the templates will be stored -> folder/views
// Setting the 'view engine' value to specif the template library (in this case "pug")
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Middleware is any number of functions that are invoked by the express.js routing layer before your
// final request handler is and thus sits in the middle between a rwa request and the final intendedd route.
// It basically lets you configure how your express applcation works.

// Call app.use() to add the middleware libraries into the request handling chain
// We use the express.static middleware to get Express to serve all the static files in the /public directory in the project root
// app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
// Done setting up Middleware

// To use router module in our main app, first we require() the route module 
// then we call use() on the express applciation to add the Router to the middleware handling path,
// specifying an URL

// Import files containing codes for handling particular sets of related "routes" ("URL paths")
var wiki = require('./routes/wiki');
// var doit = require('./routes/doit');
app.use('/',wiki);
app.use('/about',wiki);
app.use('/doit',wiki);

// Catch 404 and forward to erro handler
app.use(function(req,res,next){
    var err =new Error('Not Found');
    err.status=404;
    next(err);
});

// Error handler
app.use(function(err,req,res,next){
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env')==='development' ? err :{};

    // render the error page
    res.status(err.status || 500);
    res.sender('error');
});

// req: it is the url
// res: the function tells express what to send back to the person making the request


app.listen(PORT, function () {
    console.log('Node.js web server at port 5000 is running ...');
});

module.exports=app;