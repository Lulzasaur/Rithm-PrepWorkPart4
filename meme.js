var img = document.getElementById('img'),
    btmtxt = document.getElementById('btmtxt'),
    toptxt = document.getElementById('toptxt'),
    button = document.getElementById('button'),
    memelist = document.getElementById('meme');

//add element

button.addEventListener('click',function(){
    //add image
    var div = document.createElement('div');
    div.insertAdjacentHTML('beforeend','<div class="content-wrapper"><img class="delete" height="200" width="300" src='+img.value+'><div class="toptext-wrapper">'+toptxt.value+'</div><div class="btmtext-wrapper">'+btmtxt.value+'</div></div>');
    memelist.appendChild(div);
    document.getElementById('img').value='';
    document.getElementById('btmtxt').value='';
    document.getElementById('toptxt').value='';
});

//delete element

memelist.addEventListener('click',function(event){
    var el = event.target;
    var imageContainer;
    var list;
    if(event.target.classList.contains('delete')){
        imageContainer = el.parentNode;
        list = imageContainer.parentNode;
        list.removeChild(imageContainer);
    }
});



