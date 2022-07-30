// import express
const express = require('express');

//create instance of express
// PORT = 5000 is for our localhost:5000
const app = express();
const PORT = 5000;

// this makes localhost 5000 work
// serve static files in server/public folder
app.use(express.static('server/public'));

// onReady equivalent. Listener.
app.listen(PORT, () => {
    console.log('listening on PORT', PORT)
});

// // API GET /calculate
// // req is request object
// // res is response object
// // /route
// app.get('/calculate', (req, res) => {
//     console.log('GET /calculate');

//     res.send(/* PUT ARRAY HERE */);
// });

