module.exports = function(app){
    let path = require("path");

    //route for default home page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //route for survey
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}