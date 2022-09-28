const express = require('express');
const logger = require('morgan');
const toolsRouter = require('./routes/tools');
const Tool_catergoryRouter = require("./routes/tool_catergory")
const app = express();
app.use(express.json());
app.use(logger('dev'));


app.use("/tools", toolsRouter);
app.use("/tool_catergory", Tool_catergoryRouter)
app.use((req, res) =>
    res.status(404).send ("Sorry page not"));
 


module.exports = app;
