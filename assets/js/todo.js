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