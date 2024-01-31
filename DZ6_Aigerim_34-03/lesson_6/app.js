var courseGeeks = {
    name: 'Geeks',
    foundingDate: 2017,
    address: {
        street: 'Ibraimova 103',
        number: null,
    },
    branches: undefined,
    showInfo(){
        console.log(`Курсы - ${this.name}`)
    },
    showInfo2(){
        function info() {
            console.log(`Курсы - ${this.name}`)
        }
        info()
    }
}
courseGeeks.showInfo()
courseGeeks.showInfo2()

const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }
    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons = document.createElement('button')
    divButtons.setAttribute('class', 'div_buttons')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')




    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'
    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)

    deleteButton.onclick = () => div.remove()
    text.addEventListener('click', () => text.classList.add('toggle'))

    editButton.onclick = () => {

        const modal = document.createElement('div')
        modal.setAttribute('class', 'modal')

        const modalContent = document.createElement('div')
        modalContent.setAttribute('class', 'modal_content')

        const editInput = document.createElement('input')
        editInput.setAttribute('type', 'text')
        editInput.value = text.textContent

        const divButtonsEdit = document.createElement('button')
        divButtonsEdit.setAttribute('class', 'div_buttons_edit')

        const okButton = document.createElement('button')
        okButton.setAttribute('class', "ok_button")

        const cancelButton = document.createElement('button')
        cancelButton.setAttribute('class', "cancel_button")

        divButtonsEdit.append(okButton, cancelButton)
        modalContent.append(editInput)
        modal.append(modalContent, divButtonsEdit)
        document.body.append(modal)

        okButton.onclick = () => {
            if (!editInput.value.trim()){
                return alert('Нельзя вводить пустоту')
            }else{
                text.textContent = editInput.value
                modal.remove()
            }
        }
        cancelButton.onclick = () => modal.remove()

        okButton.innerHTML = 'OK'
        cancelButton.innerHTML = 'CANCEL'

    }

    todoList.prepend(div)
    input.value = ''

}
createButton.onclick = () => createTodo()


window.onkeydown = (event) => {
    if (event.code === 'Enter'){
        createTodo()
    }
}
