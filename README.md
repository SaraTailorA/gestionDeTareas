# Mini Web App: Task list Manager 🚀

This project is a comprehensive web application developed as part of **Module 3: Advanced JavaScript**. It demonstrates the integration of modern frontend techniques, including DOM manipulation, data persistence, and server-side communication.

## 📋 Project Objectives

* Implement a complete CRUD (Create, Read, Update, Delete) system.
* Manage asynchronous operations using `Fetch API` and `async/await`.
* Ensure data persistence using both `LocalStorage` and a simulated backend (`JSON Server`).
* Create a responsive and aligned UI using `CSS Flexbox`.

## 🛠️ Technologies Used

* **HTML5**: Semantic structure.
* **CSS3**: Custom styling with Flexbox for perfect button alignment.
* **JavaScript (ES6+)**: Logic using `let`, `const`, arrow functions, and modules (no `var` used).
* **Water.css**: Minimalist CSS framework for a clean baseline.
* **JSON Server**: Local REST API simulation.

## 🚀 How to Run the Project

### Prerequisites

* [Node.js](https://nodejs.org/) installed on your machine.

### Setup

1. **Clone or download** the project files into a folder.
2. Open a terminal in that folder.
3. Start the local server by running:

```bash
npx json-server --watch db.json --port 3000
```

4. Open `index.html` in your favorite web browser.

## ⚙️ Key Features

### Persistence

Items are saved in `LocalStorage`, so they remain after refreshing the page.

### API Synchronization

A `"Sync"` button allows fetching the latest data directly from the server.

### Form Validation

Prevents empty entries and ensures data integrity.

### Full CRUD

* **Create**: Add items via the form.
* **Read**: View the list synchronized with the database.
* **Update**: Edit item names using a dynamic prompt.
* **Delete**: Remove items from both the UI and the server.

## 📂 Project Structure

```text
project-folder/
│
├── CSS/
│   └── style.css
│
├── gestionDeTareas/
│
├── js/
│   └── app.js
│
├── .gitignore
├── db.json
├── index.html
└── README.md
```

### File Descriptions

* `CSS/style.css`: Custom styles and layout fixes.
* `js/app.js`: Core logic and API communication.
* `db.json`: Local database file used by JSON Server.
* `index.html`: Main application structure.
* `.gitignore`: Specifies files and folders ignored by Git.
* `README.md`: Project documentation.

```md
## 🔧 Future Improvements

- Add task completion status
- Add task categories
- Improve UI animations
- Implement authentication
- Deploy backend online

```md
## 👩‍💻 Author

Developed by Sara Carolina Tailor Acosta as part of Module 3: Advanced JavaScript.


