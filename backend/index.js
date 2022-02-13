require('dotenv').config();
const express = require("express");
const expressConfig = require('./config/express')
const connectDB = require('./config/database')
const routes = require('./routes')
const { config } = require('./config')

const PORT = config.PORT;

const app = express();

expressConfig(app);

app.use(express.urlencoded({ extended: true }));
app.listen(PORT, function() {
	connectDB();
	routes(app);
  console.log(`App listening on port: ${PORT}`);
});
