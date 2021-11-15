var taskbtn = document.getElementById('taskBtn')
var list = document.querySelector('#list')
var displayNone = document.getElementById('dnone')
var addBtn = document.getElementById('addBtn')
var input = document.getElementById('input')

taskbtn.addEventListener('click' , e => {
    displayNone.classList.toggle('dnone')
})

function createTodoList() {
    if(input.value == '') {
        return
    } else {
        var newLI = document.createElement('li')
        newLI.setAttribute('class' , 'list-item')
        newLI.textContent = input.value
        list.appendChild(newLI)
        input.value = ''
        input.focus()
    }
}
addBtn.addEventListener("click", e => {
    e.preventDefault() 
    createTodoList();
})

input.addEventListener('keyup' , (e) => {
    if(e.which === 13) {
        createTodoList();
    }
});