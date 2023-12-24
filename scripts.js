let toDoInput
let errorInfo 
let addButton
let ulList 
let newTodo

let popup
let popupInfo
let toDoEdit
let popupInput 
let popupAddButton 
let popupCloseButton



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
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddButton = document.querySelector('.accept')
    popupCloseButton = document.querySelector('.cancel')

}

const preparedDOMEvents = () => {
     /* nasłuchiwanie*/
     addButton.addEventListener('click', addNewTask)
     ulList.addEventListener('click', checkClick)
     popupCloseButton.addEventListener('click', closeEditPopup)
     popupAddButton.addEventListener('click', changeTodoText)
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
    completeButton.innerHTML = 'Complete'
    const editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.textContent ='Edit'
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'Delete'

    toolsPanel.append(completeButton, editButton, deleteButton)
}


const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editToDo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editToDo = e => {
    toDoEdit = e.target.closest('li')
    popupInput.value = toDoEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closeEditPopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if (popupInput.value !== ''){
        toDoEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Podaj jakiś tekst'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()
    
    const allTodos = ulList.querySelectorAll('li')
    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

document.addEventListener('DOMContentLoaded', main) 