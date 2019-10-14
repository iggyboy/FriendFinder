//dependencies
let express = require("express");
let path = require("path");

//intitializing express
let PORT = process.env.PORT || 8080;
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let htmlroutes = require("./routing/htmlRoutes.js")(app); 
let apiroutes = require("./routing/apiRoutes.js")(app);



app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

  module.exports = app;
  