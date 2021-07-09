// ACCEPTANCE CRITERIA

// DONE You should provide your own project, not the example URL.

// DONE You can submit a form that includes a file upload. ( /api/fileanalyse )

// DONE The form file input field has the name attribute set to upfile.

// DONE When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

var express = require('express');
var cors = require('cors');
var multer = require('multer');

require('dotenv').config();

var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let file = req.file;
  res.send({
    "name": file.originalname,
    "type": file.mimetype,
    "size": file.size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
