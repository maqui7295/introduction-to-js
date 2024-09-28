// Todo list

const input = document.querySelector('input');
const btn = document.querySelector('button');
const todoList = document.querySelector('#todo-list');
const messageBox = document.querySelector('span'); 

btn.addEventListener('click', () => {
    const todoText = input.value;

    if(!todoText) {
      messageBox.style.display = "inline";  
        
    } else {
        messageBox.style.display = "none";  
    }
});