const express = require('express');
const port = 8000;


const db = require('./config/mongoose');
const Todolist = require('./models/todolist');
const { findOneAndUpdate } = require('./models/todolist');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use(express.static('assets'));

// To display the tasks on the website
app.get('/', function(req, res){

    // To find the records of tasks in the database
    Todolist.find({}, function(err, tasks){
        if(err)
        {
            console.log('Error in retrieving the data from the database');
            return;
        }
        // When found, they are rendered through the todo.ejs
        return res.render('todo', 
        { 
            title: 'To Do List' , 
            todo_list: tasks 
        });
    });
});
   
// To create a record of the task in the database, based upon the values given by the user
app.post('/create-task', function(req, res){

    // Function to create the task
    Todolist.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTask){
        if(err)
        { 
            console.log('error in creating a task'); 
            return; 
        }

        // To display the created record in the console
        console.log('************', newTask);

        // To go back to the main page
        return res.redirect('/');
    });

});

// Delete task(s)/records function
app.get('/delete-tasks/', function(req, res)
{
    // To store all the ids from req.query to "ids" variable
    let ids=new Array();
    for(let i in req.query)
    {
        ids.push(req.query[i]);
    } 
     
    // deleteMany to delete multiple records at once 
    // becase sometimes there will be multiple tasks to be deleted
    // "$in" is used to search for id in the given list of ids 
    Todolist.deleteMany({_id:{$in:ids}}, function(error)
    {
        if(error)
        {
            console.log('Error in deleting the data from the database.');
            return;
        }

        return res.redirect('back');
    })
});

// To connect to the server
app.listen(port, function(err){
    if(err)
    {
        console.log(`There was an error ${err}`);
    }

    console.log(`Connected to the port : ${port}`);
});