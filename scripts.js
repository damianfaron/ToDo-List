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
}




const addNewTask = () => {
   if (toDoInput.value !== ''){
    newTodo = document.createElement('li')
    newTodo.textContent = toDoInput.value
    ulList.append(newTodo)
    toDoInput.value = ''
    errorInfo.textContent = ''
   } else {
    errorInfo.textContent = 'Wpisz tekst do dodania'
   }

}

const createToolArea = (params) => {
    const div = document.createElement('div')
    const
}






document.addEventListener('DOMContentLoaded', main) 