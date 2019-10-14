module.exports = function (app) {
    let path = require("path");
    let friends = require("../data/friends.js");

    //just returns the friends array
    app.get('/api/friends', function (req, res) {
        res.send(JSON.stringify(friends));
    });

    //finds the friend with the lowest differnce in answers, and returns them to the survey html
    app.post('/api/friends', function (req, res) {
        let differences = [];
        let newDude = req.body;
        friendses = friends;
        //compare and return
        for (var j = 0; j < friendses.length; j++) { 
            let diff = 0;
            for (var i = 0; i < friendses[j].scores.length; i++) {
                diff += Math.abs(parseInt(friendses[j].scores[i]) - parseInt(newDude.scores[i]));
            }
            differences.push(diff);
        }
        console.log(differences);
        let theGuyIndex = differences.indexOf(Math.min(...differences));
        console.log(theGuyIndex);
        friends.push(newDude);
        console.log("Your best friend is.....", friendses[theGuyIndex]);

        res.json(friendses[theGuyIndex]);
    });

}