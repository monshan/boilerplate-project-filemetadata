// ACCEPTANCE CRITERIA

// You should provide your own project, not the example URL.

// You can submit a form that includes a file upload. ( /api/fileanalyse )

// The form file input field has the name attribute set to upfile.

// When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

var express = require('express');
var cors = require('cors');
require('dotenv').config();

var app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  res.json(req.body)
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
