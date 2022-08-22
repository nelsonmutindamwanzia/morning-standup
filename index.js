document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault() // prevents the form from doing its *default*
        buildToDo (e.target.new_todo.value)
        form.reset() //resets textfield after to do event is submitted
    })
});
    
function buildToDo(todo){
    let p = document.createElement('p') //creates paragraph
    let btn = document.createElement('button') //creates a button 
    
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${todo} `; //interpolation used to create space between event and button
    p.appendChild(btn) //child of paragraph
    console.log(p)
    document.querySelector('#todo_container').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove() // give the btn functionality to delete the to do event
}


document.addEventListener('DOMContentLoaded', () => {
    console.log ("After DOM Loaded")
})

    console.log("Before DOM Loads")
