
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('assets'));

app.get('/barChart', function(req, res){
    res.render('barChart');
});

app.get('/horizontalBarChart', function(req, res){
    res.render('horizontalBarChart');
});

app.get('/lineChart', function(req, res){
    res.render('lineChart');
});

app.get('/radarChart', function(req, res){
    res.render('radarChart');
});

app.get('/pieChart', function(req, res){
    res.render('pieChart');
});

app.get('/doughnutChart', function(req, res){
    res.render('doughnutChart');
});

app.get('/polarAreaChart', function(req, res){
    res.render('polarAreaChart');
});

app.get('/bubbleChart', function(req, res){
    res.render('bubbleChart');
});

app.listen(8000, function(){

});