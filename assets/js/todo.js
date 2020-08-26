// To change the color of category-type-box in the display task container
for (let box of document.querySelectorAll('.task-type'))
{
    if(box.innerText=='CHOOSE')
    {
        box.style.backgroundColor="transparent";
        box.style.color="transparent";
    }
    else if(box.innerText=='WORK')
    {
        box.style.backgroundColor="maroon";
    }
    else if(box.innerText=='PERSONAL')
    {
        box.style.backgroundColor="green";
    }
    else if(box.innerText=='OTHER')
    {
        box.style.backgroundColor="black";
    }
    else if(box.innerText=='SCHOOL')
    {
        box.style.backgroundColor="teal";
    }
    else
    {
        box.style.backgroundColor="goldenrod";
    }
}

function delete_Url(ids)
{
    // If no task is selected, yet the delete button is clicked, then the user will be alerted.
    if(ids.length==0)
    {
        window.alert('Please select a task');
    }
    // This is the link which will be sent to the server in the req.query form to delete the task(s)
    link="/delete-tasks/?";
    let count=0;
    
    // loop to make the req.query link in the form of  "/delete-tasks/?id0=...&id1=....."
    for(let id of ids)
    {
        link +="id"+count+"=";
        link +=id;
        if(count < ids.length-1)
        {
            link +="&";
        }
        count++;
    }
    
    // finally, the href of the Delete Task Button is replaced by the above generated link
    document.querySelector('.del-btn>a').setAttribute('href', link);
}

// Adding a function to the Delete Button so that selected tasks(via checkbox) 
// get deleted upon clicking the button
document.querySelector('.del-btn>a').addEventListener('click', function()
{
    let ids = new Array();
    for(let checkbox of document.querySelectorAll('input[type="checkbox"]'))
    {
        if(checkbox.checked)
        {
            ids.push(checkbox.getAttribute('id'));
        }
    }
    delete_Url(ids);
});
