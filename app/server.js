//dependencies
let express = require("express");
let path = require("path");

//intitializing express
let PORT = process.env.PORT || 8080;
let app = express();

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  