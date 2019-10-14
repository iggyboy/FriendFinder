module.exports = function (app) {
    let path = require("path");
    let friends = require("../data/friends.js");

    app.get('/api/friends', function (req, res) {
        res.send(JSON.stringify(friends));
    });

    app.post('/api/friends', function (req, res) {
        let newDude = req.body;
        console.log(newDude.scores);
        //compare and return
        let differences = [];
        for (let j = 0; j < newDude.scores.length; j++) {
            let diff = 0;
            for (let i = 0; i < friends[j].scores.length; i++) {
                diff += Math.abs(parseInt(friends[j].scores[i])  - parseInt(newDude.scores[i]));
            }
            differences.push(diff);
        }
        let theGuyIndex = differences.indexOf(Math.min(differences));
        //
        console.log(newDude);

        friends.push(newDude);
        res.send(theGuyIndex);
        res.sendStatus(200);
    });

}