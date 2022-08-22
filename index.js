document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        // prevents the form from doing its *default*
        e.preventDefault()
        buildToDo(e.target.new_todo.value)
        //resets textfield after to do event is submitted
        form.reset()
    })
});

function buildToDo(todo) {
    //creates paragraph
    let li = document.createElement('li')
    //creates a button 
    let btn = document.createElement('button')

    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    btn.classList.add('btn','btn-danger')
    //interpolation used to create space between event and button
    li.textContent = `${todo} `;
    //child of paragraph
    li.appendChild(btn)
    console.log(li)
    document.querySelector('#todo_container').appendChild(li)
}

function handleDelete(e) {
    // give the btn functionality to delete the to do event
    e.target.parentNode.remove()
}


// Runs the js code after the DOM has been fully rendered

// document.addEventListener('DOMContentLoaded', () => {
//     console.log("After DOM Loaded")
// })

// console.log("Before DOM Loads")