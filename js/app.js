const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const syncBtn = document.getElementById('sync-btn');

const API_URL = 'http://localhost:3000/items';
let itemsArray = [];

// 2. LOCAL STORAGE

const saveToLocalStorage = () => {
    localStorage.setItem('myTasksData', JSON.stringify(itemsArray));
};

const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('myTasksData');
    if (storedData) {
        itemsArray = JSON.parse(storedData);
    }
};


// API 

// GET: Fetch data
const fetchItems = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error connecting to the API");

        const data = await response.json();

        itemsArray = data;

        renderItems();
        saveToLocalStorage();

        console.log("Synchronized with server ✅");

    } catch (error) {
        console.error("Error:", error);
        alert("Connection error. Is JSON Server running?");
    }
};

// POST: Create
const postItem = async (newItem) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
    } catch (error) {
        console.error("Error saving item:", error);
    }
};

// PUT: Update
const putItem = async (id, updatedItem) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItem)
        });
    } catch (error) {
        console.error("Error updating item:", error);
    }
};

// DELETE: Remove
const deleteItemServer = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};

// DOM MANIPULATION

const renderItems = () => {
    itemList.innerHTML = ''; // Clear list

    itemsArray.forEach((item, index) => {
        const li = document.createElement('li');

        // Task text
        const span = document.createElement('span');
        span.textContent = item.name;

        // Button container (for perfect alignment)
        const btnGroup = document.createElement('div');
        btnGroup.classList.add('button-group');

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editItem(item.id, index);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteItem(item.id, index);

        // Organize elements
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnGroup);

        itemList.appendChild(li);
    });
};

const addItem = async (event) => {
    event.preventDefault();

    const itemName = itemInput.value.trim();

    if (itemName === "") return;

    const newItem = {
        id: Date.now().toString(),
        name: itemName
    };

    itemsArray.push(newItem);

    renderItems();
    saveToLocalStorage();

    await postItem(newItem);

    itemInput.value = '';
};

const editItem = async (id, index) => {
    const newName = prompt("New name:", itemsArray[index].name);

    if (!newName || newName.trim() === "") return;

    const updatedItem = {
        id,
        name: newName.trim()
    };

    itemsArray[index] = updatedItem;

    renderItems();
    saveToLocalStorage();

    await putItem(id, updatedItem);
};

const deleteItem = async (id, index) => {
    if (!confirm("Delete this item?")) return;

    itemsArray.splice(index, 1);

    renderItems();
    saveToLocalStorage();

    await deleteItemServer(id);
};

itemForm.addEventListener('submit', addItem);
syncBtn.addEventListener('click', fetchItems);

const init = () => {
    loadFromLocalStorage();
    renderItems();
};

init();