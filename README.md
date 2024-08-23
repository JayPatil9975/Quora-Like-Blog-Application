# Quora-Like Blog Application

This project is a simple web application that mimics some functionalities of a Quora-like blog platform. It allows users to view, create, edit, and delete posts. Built using Node.js with Express and EJS for server-side rendering, this application demonstrates fundamental CRUD operations, form handling, and dynamic routing.

## Features
- **View Posts**: List all posts with details such as username and content.
- **Create Post**: Form to add new posts with a username and content.
- **Edit Post**: Modify the content of existing posts.
- **Delete Post**: Remove posts from the list.
- **Post Details**: View detailed information about each post, including the ID, username, and content.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **EJS**: Templating engine for rendering dynamic HTML.
- **UUID**: Library for generating unique identifiers for posts.
- **Method-Override**: Middleware for supporting HTTP methods such as PATCH and DELETE in forms.

## Getting Started

### Prerequisites
- Node.js and npm (Node Package Manager) installed on your machine.

### Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/JayPatil9975/Quora-Like-Blog-Application.git
    cd Quora-Like-Blog-Application
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Server**:
    ```bash
    npm start
    ```

4. **Open Your Browser**:
    Navigate to [http://localhost:8080](http://localhost:8080) to view the application.

## How to Use
- **View All Posts**: Visit `/posts` to see a list of all posts.
- **Create a New Post**: Go to `/posts/new` to add a new post.
- **Edit a Post**: Click "Edit" on a post to modify its content.
- **View Post Details**: Click "View Details" to see more information about a post.
- **Delete a Post**: Use the "Delete" button to remove a post from the list.

## Contributing
Feel free to open issues or submit pull requests if you'd like to contribute to the project. Contributions and suggestions are welcome!

## Author 
Jayesh Patil
