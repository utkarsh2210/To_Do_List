const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function(err){
    if(err)
    {
        console.log(`There was an error ${err}`);
    }

    console.log(`Connected to the port : ${port}`);
});