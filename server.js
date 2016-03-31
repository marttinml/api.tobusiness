var mongoose = require('./config/mongoose'),
    express  = require('./config/express'),
    db       = mongoose(),
    app      = express();

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("\n - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    console.log(" |     API REST [2school] - http://localhost:" + port + "      | ");
    console.log(" - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
});

//module.exports = app;