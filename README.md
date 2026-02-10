# Student Resource Sharing System

## Overview

This is a small web-based project built using **HTML, CSS, JavaScript, PHP, and JSON**. The main purpose of the project is to **collect data from the frontend and store it in a JSON file**. It allows students to share useful learning resources in a simple and lightweight way without using a database.

## Project Objective (Motto)

The main motto of this project is:

> **Collecting data from the frontend and storing it in a JSON file using PHP.**

This project demonstrates how frontend form data can be handled by a backend PHP script and saved persistently in a JSON file.

## Features

* Simple and user-friendly UI
* Add student resources through a form
* Store submitted data in a JSON file
* No database required
* Lightweight and easy to understand

## Technologies Used

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: PHP
* **Data Storage**: JSON file

## Project Structure

```
Student-Resource-Sharing-main/
│
├── index.html        # Frontend UI
├── style.css         # Styling of the webpage
├── script.js         # Frontend logic (form handling & display)
├── resource.php      # Backend PHP file to store data
├── resources.json    # JSON file for storing resources
```

## How the Project Works

1. The user fills in the resource details in the form on the frontend.
2. JavaScript captures the form data.
3. The data is sent to `resource.php` using a POST request.
4. The PHP file processes the data and appends it to `resources.json`.
5. The resource data is stored permanently in JSON format.

## Data Stored

Each resource contains:

* Title
* Description
* Resource link
* Type (notes, video, etc.)
* Subject
* Contact information

## Setup Instructions

1. Install **XAMPP / WAMP / LAMP** server.
2. Place the project folder inside the `htdocs` directory.
3. Start **Apache server**.
4. Open the browser and run:

   ```
   http://localhost/Student-Resource-Sharing-main/index.html
   ```

## Future Enhancements

* Display stored resources dynamically from JSON
* Edit and delete resources
* Add validation and security
* User authentication
* Replace JSON with database (MySQL)

## Learning Outcome

* Understanding frontend to backend communication
* Handling POST requests in PHP
* Working with JSON files in PHP
* Basic full-stack web development

## Author

**Nikita**

---

This project is suitable for beginners and academic mini-project submissions.
