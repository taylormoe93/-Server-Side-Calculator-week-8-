Ajax is sending an OBJECT in the post body. Package things as an object. Get request are usually arrays of objects. Posts are objects. Even if all you care about is a string, wrap it up in an object.

Send statuses (status codes). res.sendStatus(200); If you need to send numbers, send as an object. res.send({'answer:' 20})

Ajax:
Allows us to communicate from the client to the server. Get a bit of data without refreshing the page. 

API: the server allowing people to communicate with it. Ajax is how we are communicating with the server.

All math happens on the server for this assignment.

Everything on the client is visible to the user. The server is more secure.

arrow function:
use on the server if you want. Same as a reg function. Slightly shorter way of writing a function. Not usable on jquery. They work for anonymous functions. The arrow represents the word 'function'.


A function on client vs server is determined by what you want secret. Secret goes on server.

Get and post: REST API
GET gets data. reading existing data from server.
post add new data. creates new data.
put updates existing data
delete deletes data

Node is a box that runs JS. How we run JS outside of a browser. A runtime.
Node is DVD player, Express is DVD, terminal is TV, NPM is blockbuster.


### DANE'S LIVE SOLVE:

- Install spellchecker add on
- Make a to do list and then you can paste them into your relevant document and comment them out.
#  Make a TO DO LIST.
    - [x] Project setup
        - [] client side UI
        - [] Server setup
        - [] Project
            - npm init -- this creates a package.json
            - install express
            - .gitignore
            - folders
        - [] Static File Server
            -[] I should be able to see index.html when I visit localhost:5000
                - [] setup port 5000
                - [] require express
                - [] url encoded setup (rec.body)
                - [] static setup (server/public)
                - [] app.listen
    - [] Calculate
        - DO MATH
            - [] Client side HTML
                - two inputs
                - operators
                - = button
                - C button
                - History zone
                - Answer zone
            - [] Client size JS
                - operator click logic
                    - "When I click on an operator, I should be able to see the correct one I clicked." (note the use of WHEN and SHOULD language)
                - [] Submit button
                    - "When I click on =, it should...
                        - [] POST to /calculate
                            - save on server
                            - send back OK/CREATED
                - [] Clear button
                    - "When I click on clear it should empty input fields"
                - [] HISTORY
                    - "When I load the page, I should see all the previous calculations"
                    - [] GET /calculations 
                    - [] append to DOM
                - [] ANSWER
                    - Append to DOM
            - [] SERVER SIDE
                - [] Store the calculations
                - [] POST /calculation route
                    - trigger saving, mathing, doing...
                - [] Do the math
                    - receive input, calculate the results
                - [] Send history, answer...
                    - [] GET /calculation route
# other notes:
    - static assets are the assets that DO NOT change from user to user. Get the same font, html, etc. But the DATA is different for each user, it is DYNAMIC.
    - Make a to do list on thursday so you have questions on friday.
    - Do small wins. Make a console.log() work and make sure things work. Before worrying about crazy logic.

Make handle ready
make a handleSubmit for equals, as a function.
    - just make a variable for each input and grab their value $().val()

You can make one click listener for all the operators by giving them one button class named '.operator'.
you can use operator = $(this).text(). To know WHICH operator you clicked. You could also use data-operator next to the button class=. Then use $(this).data() instead of text.


POST REQUEST:
In handleSubmit.
method: is POST because it's a post.
url: 'route/' is basically taco. But name it what it is most clearly. '/calculate'
data: //what do we want to *send* over? {
    num1 : num1, // make me a key named num1, what is it's value? it's num1. etc.
    num2 : num2,
    operator : operator
}.then(function(response){
    console.log(response)
})  //ajax go on a mission, and THEN I want you to do things.
    // the response is the server saying OK. The servers response.

# Then on the SERVER.js side: // linked to previous post on client.js above. ^
app.post('/calculate, (req, res) => {
    res.sendStatus(201); // Expected output: 'created'. Are they talking to one another?
    console.log(req.body);
    // console is working. Now let's do the math
    doMath(req.body); // so req.body is the body of the data we sent.

})

let history = [];

function doMath(calcObj) {
    // DO THE MATH. INPUT ALL THE MATH STUFF. SWITCH EXAMPLE:
    switch (calcObj.operator) {
        case '+':
            //do addition...
            calcObj.answer = Number(calcObj.num1) + Number(calcObj.num2);
            history.push(calcObj);
            break; // end case '+'
        case '-':
            // etc...
    }
}

app.get('/calculate', (req,res) => {
    console.log('IN GET /calculate')
    res.send(history); //send the info of the history
    // if you want to send just one thing it has to be as an object //

})

# On the CLIENT.js now...
under our ajax .then()
getCalculations(); to get the answer. do a post, get a get.

function getCalculations() {
    //go get our history
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(function(response) {
        console.log(response); // want to know if I can see it in the console after doing a post//
        //display history
        render(response); // render means draw. It's taco.

    })
}

function render(history) {
    //no dupes
    $('#history').empty();

    //render to DOM
    for(let calc of history) {
        $('#history').append(`
            <li>${calc.num1} ${calc.operator} ${calc.num2} = ${calc.answer}</li>
        `)
    }
}

//Why no calculations on page after page load? PART OF THE CODE CHALLENGE BELOW
// load the page, after load, trigger Ready, trigger GET request to load on page load
// Load > GET > Render > POST > GET > Render

in function handleReady: // which triggers on page load. Not data permanent, but as long as the server isn't restarted, it's there.
// put this so it loads on page load.
getCalculations();


In the let calc of history:
$('#answer').text(history[history.length-1].answer) //keeps answer on page after page load.