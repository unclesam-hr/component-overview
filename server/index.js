const express = require('express');
const parser = require('body-parser');
const path = require('path');

var app = express();
const port = 3004;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist/')))

app.listen(port, () => console.log(`app listening on port ${port}!`));