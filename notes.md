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


# TO DO:
- get hooked up
- Create user interface in HTML
    - 2 number inputs
    - buttons: 
        - +, -, *, /, =, Clear
client.js:
   - when = is clicked: 
    capture the input 
    turn it into an object
    send this object to the server via POST

Server.js:
    - insert the two inputs and add them
    - " multiply them
    - " minus them
    - " divide them
    - the output:
        - send back the OK
        - GET the answer
    
        - display the answer on the DOM
        - display a history of each equation you enter using a GET request
        - it should stay on the page even after refreshing

