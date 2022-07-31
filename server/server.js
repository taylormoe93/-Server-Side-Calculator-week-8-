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

let calculation = []; // Array we'll push into.
let answer = {answer: 0}; //

// GET AND POST ROUTES
/*
We'll take the data from the client and pul it to the server, 
perform the calculations,
and then push the answer back to the client.
*/

/*
API GET /calculator
req is request object
res is response object
/route
*/
app.get('/calculator', (req, res) => {
    console.log('GET /calculator');
    calculate();
    res.send(answer);
})

// POST /calculator Route
app.post('/calculator', (req, res) => {
    console.log('POST /calculator');
    console.log(req.body);
    calculation.push(req.body);
    
    res.sendStatus(200); // 'OK'
})

// CALCULATION
/*
Changing strategy and going this way:
We have an array with three values in them. Two numbers and an operator. 
We'll check the value in the array(1) position, which would be between (0) and (3).
IF it's a + then we'll return an answer for addition. 
IF it's a -, then we'll return an answer for subtraction, etc.
*/
function calculate(){
console.log( 'in calculate' );

if( calculation[1] == '+' ){
    return ( calculation[0] + calculation[2] );
}
if ( calculation[1] == '-' ){
    return ( calculation[0] - calculation[2] );
}
if ( calculation[1] == '*' ){
    return ( calculation[0] * calculation[2] );
}
if ( calculation[1] == '/' ){
    return ( calculation[0] / calculation[2] );
}
}

