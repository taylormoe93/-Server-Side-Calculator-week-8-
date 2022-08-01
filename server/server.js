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

let calculation = []; // data from the calculator
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
for (let taco of answers) {
    
if( calculation[1] === '+' ){
    console.log(calculate());
    answer = ( Number(calculation[0]) + Number(calculation[2]) );
}
else if ( calculation[1] === '-' ){
    console.log(calculate());
    answer = ( Number(calculation[0]) - Number(calculation[2]) );
}
else if ( calculation[1] === '*' ){
    console.log(calculate());
    answer = ( Number(calculation[0]) * Number(calculation[2]) );
}
else if ( calculation[1] === '/' ){
    console.log(calculate());
    answer = ( Number(calculation[0]) / Number(calculation[2]) );
}
}
return answers.push({total: answer}) // Take result and make an answer object.
}




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
    res.send(answers);
})

// POST /calculator Route
app.post('/calculator', (req, res) => {
    calculation = [];
    console.log('POST /calculator');
    console.log(req.body);
    calculation.push(req.body.num1);
    calculation.push(req.body.operator);
    calculation.push(req.body.num2);
    
    
    res.sendStatus(200); // 'OK'
})