var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

const PORT = process.env.PORT;//8080

app.use('/', express.static('public'));

app.post('/fupld', upload.single('myfile'), function (req, res, next) {
  // req.file is the `avatar` file
  if (req.file === undefined)
    res.send('error. no file.');
  else
    res.send({size:req.file.size});
  // req.body will hold the text fields, if there were any
})

/*app.get('/', function (req, res) {
  res.send('Hello! Welcome to the best image search API :)');
});*/


app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT);
});
