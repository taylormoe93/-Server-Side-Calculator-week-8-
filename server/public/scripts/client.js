console.log('hello from client');

$(document).ready(onReady);

function onReady() {
    $('#addButton').on('click', additionFunc); // addition button
    $('#minusButton').on('click', minusFunc); // minus button
    $('#timesButton').on('click', timesFunc); // times button
    $('#divideButton').on('click', divideFunc); // divide button
    $('#equalsButton').on('click', equalsFunc); // equals button
    $('#clearButton').on('click', clearFunc); // clear button
}

let operator = ''; // we make an empty variable for the operator function. 


// OPERATOR FUNCTIONS
/* 
First we make a batch of functions for the operator buttons.
We'll send the operator value to the server and use it to calculate the equation server-side.
We'll use this in conjunction with the two number values from the two inputs.
*/

// When the + button is clicked do this:
function additionFunc() {
    $('#operatorSpan').empty(); // empty the operator
    $('#operatorSpan').append('+'); // append with a +
    operator = '+'; // change the operator to a string. We'll use this on the server. 
};

// When the - button is clicked do this:
function minusFunc() {
    $('#operatorSpan').empty(); // empty the operator
    $('#operatorSpan').append('-'); // append with a -
    operator = '-';
};

// When the * button is clicked do this:
function timesFunc() {
    $('#operatorSpan').empty();
    $('#operatorSpan').append('*');
    operator = '*';
};

// When the / button is clicked do this:
function divideFunc() {
    $('#operatorSpan').empty();
    $('#operatorSpan').append('/');
    operator = '/';
};

