const express = require('express');
const app = express();

const db = require(`./src/models/index.js`);


//Using JSON format for POST request
app.use(express.json())

//Adding Static Directory path
var staticDirectoryPath = require('path').join(__dirname, '/src/views')
app.use(express.static(staticDirectoryPath))

//Syncing tables to MySQL DB

//force: true will drop the table if it already exists and recreate it, 
//force: false will not drop the table if it already exists and throw an error
db.sequelize.sync({ force: false })

//Adding Routes
const routes = require('./src/routes')
app.use('/', routes)

app.listen(process.env.PORT || 3000, function () {
    console.log("\napp listening at port %d in %s mode", this.address().port, app.settings.env);
    console.log("\nStarting development server at http://127.0.0.1:3000/");
    console.log("Quit the server with CONTROL-C.\n");
});