let message=document.getElementById('message')
function addMovie(event){
    event.preventDefault()
    let inputField=document.querySelector('input')
    let movie=document.createElement('li')
    let movieTitle=document.createElement('span')
    movieTitle.textContent=inputField.value
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn=document.createElement('button')
    deleteBtn.textContent='x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul");
    list.appendChild(movie);


    inputField.value=''
}
function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent=`${event.target.parentNode.firstChild.textContent} deleted!`
       // firstChild returns the first child node: An element node, a text node, or a comment node.
//   The firstElementChild property returns the first child element (ignores text and comment nodes).

    revealMessage()
}

let movieForm=document.querySelector('form')
movieForm.addEventListener('submit',addMovie)
// let addBtn=document.querySelector('#add-btn')
// addBtn.addEventListener('click',addMovie)

function crossOffMovie(event){
   
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent= ` ${event.target.textContent} watched!`
    }else{
        message.textContent=` ${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(function(){
        message.classList.add('hide')
    },1000)
       
    
}