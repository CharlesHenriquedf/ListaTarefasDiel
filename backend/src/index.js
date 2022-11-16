const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverConnection = require('./server');
const taskRouter = require('./routes/taskRoutes');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

serverConnection();

app.use(bodyParser.json());

app.use(cors());

app.use(taskRouter);

app.listen(port, () => console.log(`Online: ${port}`));
