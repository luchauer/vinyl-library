var express = require("express");
var apiRoutes = require("./api/routes");

var app = express();

apiRoutes(app);

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, function(err){
    if (err) {
        console.log("Error");
        throw err;
    }
    else {
        console.log("Listening on port 3000");
    }
});
