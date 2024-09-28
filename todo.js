// Todo list
const input = document.querySelector('input');
const btn = document.querySelector('button');
const todoList = document.querySelector('#todo-list');
const messageBox = document.querySelector('span'); 

// if we stored todo items, we retrieve them
const nameStore = "todo-items";

let items = localStorage.getItem(nameStore);

if(items !== null) {
    items = JSON.parse(items);
    // We could use oldItems.forEach here
    for(const item of items) {
        addItem(item);
    }

    items = new Set(items);
    
} else {
  items = new Set();  
}


btn.addEventListener('click', () => {
    const todoText = input.value.trim();

    if(!todoText) {
        messageBox.style.display = "inline";
        return;
        
    } else {
        messageBox.style.display = "none";

        if(!items.has(todoText)) addItem(todoText)
        
         items.add(todoText);

        input.value = ""; // clear the input field;

        // save the content of the list to localStorage
        localStorage.setItem(nameStore, JSON.stringify(Array.from(items)));
        
        // 1. Add the ability to delete a todo item.
        // 2. Fix the casing problem.E.g. "Hello" is the same as "hello" ?
        // 3. Login form validation with "Vanilla" Js
		// 4. Give me 5 examples of objects in the window ApI e.g. location.
		
    }
});


function addItem(todoText) {
    const list = document.createElement('li');
    list.textContent = todoText;
    todoList.appendChild(list);
}