const express = require('express');
const app = express();
const port = 3000;

// Basic in-memory visits storage array
app.visits = [];

app.post('/api/visits', function(req, res){

    // Store the supplied visit data
    app.visits.push(req.body);

    var visitId = app.visits.length;
    console.log('Stored visit count: ' + visitId);

    res.status(201).json({'id':visitId});
});

app.listen(port, () => {
    console.log('Beehive API listening on port 3000');
});