var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL ||'http://127.0.0.1:8000/api';


app.get('/', async function (req, res) {
  try {
    const response = await fetch(URL);  // no options needed
    const data = await response.json();
    res.render('index', data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Internal Server Error.' });
  }
});

app.listen(3000, function () {
  console.log('Ares listening on port 3000!');
});


//var path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));

//app.get('/',function(req,res){
  //  res.sendFile(path.join(__dirname + '/public/index.html'));
//});

//app.listen(3000,function() {
  //  console.log('Ares is running on port 3000');

//});
