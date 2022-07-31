// import express
const express = require('express');

//create instance of express
// PORT = 5000 is for our localhost:5000
// this makes localhost 5000 work
// serve static files in server/public folder
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(express.urlencoded({extended : true}));

// onReady equivalent. Listener.
app.listen(PORT, () => {
    console.log('listening on PORT', PORT)
});

