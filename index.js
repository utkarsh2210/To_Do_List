const express = require('express');
const port = 8000;


const db = require('./config/mongoose');
const Todolist = require('./models/todolist');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function(req, res){

    Todolist.find({}, function(err, tasks){
        if(err)
        {
            console.log('Error in retrieving the data from database');
            return;
        }

        return res.render('todo', 
        { 
            title: 'To Do List' , 
            todo_list: tasks 
        });
    });
});
   

app.post('/create-task', function(req, res){

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

        console.log('************', newTask);

        return res.redirect('/');
    });

});

app.get('/delete-tasks/', function(req, res)
{
    let ids=new Array();
    
    // To store all the ids from req.query to "ids" variable 
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
            console.log('Unable to delete from the database.');
            return;
        }
        
        return res.redirect('back');
    })
});

app.listen(port, function(err){
    if(err)
    {
        console.log(`There was an error ${err}`);
    }

    console.log(`Connected to the port : ${port}`);
});