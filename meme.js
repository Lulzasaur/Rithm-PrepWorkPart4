var img = document.getElementById('img'),
    btmtxt = document.getElementById('btmtxt'),
    toptxt = document.getElementById('toptxt'),
    button = document.getElementById('button'),
    memelist = document.getElementById('meme');

//add element

button.addEventListener('click',function(){
    //add image
    var div = document.createElement('div');
    div.insertAdjacentHTML('beforeend','<div class="content-wrapper delete"><img src='+img.value+'><div class="toptext-wrapper">'+toptxt.value+'</div><div class="btmtext-wrapper">'+btmtxt.value+'</div></div>');
    
    // //create del button
    // var deleteBtn = document.createElement('button');

    // //add classes to del button
    // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // //append text node
    // deleteBtn.appendChild(document.createTextNode('X'))

    // //append button to li

    // div.appendChild(deleteBtn);
    
    //append to list

    memelist.appendChild(div);
});

//delete element

memelist.addEventListener('click',function(event){
    if(event.target.classList.contains('delete')){
        var parentdiv = event.target.parentElement;
        memelist.removeChild(parentdiv);
    }
});

