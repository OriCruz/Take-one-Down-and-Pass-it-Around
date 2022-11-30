/*
- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.
*/
const express = require('express');
const app = express();
const port =3000;

//Define root route
app.get('/', (req, res)=>{

    res.send(`<h1> 99 bottles of beer on the wall</h1>.<br> <a href = '/98'> Take one down, pass it around</a>`);
});
//Define other routes
app.get('/:numberOfBottles', (req, res)=>{
    if(req.params.numberOfBottles>1){
    res.send('<h1>'+req.params.numberOfBottles+' bottles of beer on the wall</h1>'+`<a href ="/${req.params.numberOfBottles - 1}">Take one down, pass it around</a>`);
    }
    else{
        res.send('No more beers! <a href="/">Click her e to start over!</a>')
    }
});

//app listening on port
app.listen(port, ()=>{
    console.log("listeting on port "+port);
});


