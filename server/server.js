// import express
const express = require('express');

//create instance of express
// PORT = 5000 is for our localhost:5000
// this makes localhost 5000 work
// serve static files in server/public folder
const app = express();
const PORT = process.env.port || 5000;
app.use(express.static('server/public'));
app.use(express.urlencoded({extended : true}));

// onReady equivalent. Listener.
app.listen(PORT, () => {
    console.log('listening on PORT', PORT)
});

let calcData = []; // data from the calculator
let answers = []; // the answers to push back to the client

// CALCULATION
/*
Changing strategy and going this way:
We have an array with three values in them. Two numbers and an operator. 
We'll check the value in the array(1) position, which would be between (0) and (3).
IF it's a + then we'll return an answer for addition. 
IF it's a -, then we'll return an answer for subtraction, etc.
We need to loop through the answers array and harvest the necessary data sent via the inputs.
*/

function calculate(){
console.log( 'in calculate' );

let answer;

if( calcData[0].operator === '+' ){
    
    answer = ( Number(calcData[0].num1) + Number(calcData[0].num2) );
}
else if ( calcData[0].operator === '-' ){
    
    answer = ( Number(calcData[0].num1) - Number(calcData[0].num2) );
}
else if ( calcData[0].operator === '*' ){
   
    answer = ( Number(calcData[0].num1) * Number(calcData[0].num2) );
    
}
else if ( calcData[0].operator === '/' ){
   
    answer = ( Number(calcData[0].num1) / Number(calcData[0].num2) );
        }
answers = [];
answers.push({total: answer})        
return {total: answer}; // Take result and make an answer object.
    }

// GET AND POST ROUTES
/*
We'll take the data from the client and pul it to the server, 
perform the calculations,
and then push the answer back to the client.
API GET /calculator
req is request object
res is response object
/route
*/

// POST /calculator Route
// receive client data from inputs
app.post('/calculator', (req, res) => {
    calcData = [];
    console.log('POST /calculator');
    console.log('req is', req.body);
    calcData.push(req.body);
    calculate();
   
    res.sendStatus(200); // 'OK'
})

// send answer to the client
app.get('/calculator', (req, res) => {
    console.log('GET /calculator');
    res.send(answers);
})
