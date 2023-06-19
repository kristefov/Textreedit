/* This code exports a function that sets up a route for the root URL ("/") of a web application using
the Express.js framework. When a GET request is made to the root URL, the function sends the
index.html file located in the "client/dist" directory of the application using the `res.sendFile()`
method. The `path` module is used to construct the file path to the index.html file. */
const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
