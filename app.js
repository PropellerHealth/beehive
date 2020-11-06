const express = require('express');
const app = express();
const port = 3000;

// Create visits array as basic in-memory storage
app.visits = [];

// Create 'Add Visits' API endpoint
app.post('/api/visits', function(req, res){

    // Store the supplied visit data
    app.visits.push(req.body);

    var visitId = app.visits.length;
    console.log('Stored visit count: ' + visitId);

    // send the response
    res.status(201).json({'id': visitId});
});

// Start app
app.listen(port, () => {
    console.log(`Beehive API listening on port ${port}`);
});