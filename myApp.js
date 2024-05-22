// Correctly require express and helmet
const express = require('express');
const helmet = require('helmet');

// Create an instance of Express
const app = express();

// Use Helmet to help secure your app by setting various HTTP headers
app.use(helmet());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Disable strict transport security (not recommended for production)
app.disable('strict-transport-security');

// Require and use the API routes from server.js
const api = require('./server.js');
app.use('/_api', api);

// Define a route to serve the index.html file
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Start the server on the specified port
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

// Export the app for use in other modules
module.exports = app;
