document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        // prevents the form from doing its *default* in this case
        // Refresh the browser after submission
        e.preventDefault()
        // Passes the value returned by the form into a function that 
        // creates the list of tasks
        buildToDo(e.target.new_todo.value)
        //resets the form after the submit event
        form.reset()
    })
});

function buildToDo(todo) {
    //creates a list element to be added into an unordered list
    let li = document.createElement('li')
    //creates a button 
    let btn = document.createElement('button')
    // Adding the click listener event on the button content and classes
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    btn.classList.add('btn', 'btn-danger')
    //Added the input value of the form to the list
    li.textContent = todo;
    //child of list element
    li.appendChild(btn)
    // console.log(li)
    // Added the li and button into an unordered list
    document.querySelector('#todo_container').appendChild(li)
}

function handleDelete(e) {
    // give the btn functionality to delete the parent Node containing button and 
    // the task
    e.target.parentNode.remove()
}


// Runs the js code after the DOM has been fully rendered

// document.addEventListener('DOMContentLoaded', () => {
//     console.log("After DOM Loaded")
// })

// console.log("Before DOM Loads")