/**
 * Created by Suneet on 2/8/2016.
 */

var express = require('express'),
    stylus = require('stylus');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' +req.params.partialPath);
});
app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port '+port+'...');