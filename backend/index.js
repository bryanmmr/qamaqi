require('dotenv').config();
const express = require("express");
const expressConfig = require('./config/express')
const connectDB = require('./config/database')
const routes = require('./routes')
const swaggerDocs = require('./config/swagger')
const { config } = require('./config')

const PORT = config.PORT;

const app = express();

expressConfig(app);

app.use(express.urlencoded({ extended: true }));
app.listen(PORT, function() {
	connectDB();
	routes(app);
	swaggerDocs(app, 8080);
  console.log(`App listening on port: ${PORT}`);
});
