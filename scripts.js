let toDoInput
let errorInfo 
let addButton
let ulList 
let newTodo




const main = () => {
    prepareDOMElements()
    preparedDOMEvents()
}

const prepareDOMElements = () => {
    /*elementy do pobrania*/
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addButton = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const preparedDOMEvents = () => {
     /* nasłuchiwanie*/
     addButton.addEventListener('click', addNewTask)
     ulList.addEventListener('click', checkClick)
}




const addNewTask = () => {
   if (toDoInput.value !== ''){
    newTodo = document.createElement('li')
    newTodo.textContent = toDoInput.value
    ulList.append(newTodo)
    createToolArea()
    toDoInput.value = ''
    errorInfo.textContent = ''
   } else {
    errorInfo.textContent = 'Wpisz tekst do dodania'
   }

}

const createToolArea = (params) => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeButton = document.createElement('button')
    completeButton.classList.add('complete')
    completeButton.innerHTML = 'OKKK'
    const editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.textContent ='EDIT'
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X'

    toolsPanel.append(completeButton, editButton, deleteButton)
}


const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed')
    }

    
}




document.addEventListener('DOMContentLoaded', main) 