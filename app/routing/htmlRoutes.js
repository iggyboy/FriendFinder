module.exports = function(app){
    let path = require("path");

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}