# MERN: Book Search Engine

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The MERN: Book Search Engine is a full-stack web application that allows users to search for books, save their favorite books, and view their saved books list. Originally built with a RESTful API, this project has been refactored to use GraphQL with Apollo Server for improved performance and flexibility.

## 🎥 Application Demo

As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:

![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./assets/demo-01.gif)

The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:

![Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./assets/demo-02.gif)

A user can view their saved books on a separate page, as shown in the following animation:

![The Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.](./assets/demo-03.gif)

## ⚒️ Technologies Used

- **React.js:** For building the user interface and handling client-side logic.
- **Node.js:** The runtime environment for executing JavaScript code on the server.
- **Express.js:** For routing and handling server requests.
- **Apollo Server:** For implementing GraphQL queries and mutations.
- **GraphQL:** A query language for APIs to request and modify data.
- **MongoDB:** As the NoSQL database for storing user and book data.
- **Mongoose:** An ODM for MongoDB, used to model and interact with data in the database.
- **Render:** For deploying the application.
- **MongoDB Atlas:** For cloud database hosting.
- **JavaScript:** The programming language used to build the application logic.

## 🚀 Installation

1. **Clone the Repository**:

```sh
git clone https://github.com/A-MOHAMED14/MERN-Book-Search-Engine.git
```

2. **Navigate to the Project Directory:**

```sh
cd MERN-Book-Search-Engine
```

3. **Install dependencies:**

```sh
npm run install
```

4. **Start MongoDB server and seed data:**

```sh
mongod

npm run seed
```

## 🏗️ Usage

1. **Start the Server and Client Concurrently:**

To run both the client and server for development, use:

```sh
npm run develop
```

2. **Build the Client for Production:**

To create a production build of the client, run:

```sh
npm run build
```

Make sure MongoDB is running and your database is seeded as described in the Installation section.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

```sh
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them with descriptive messages:

```sh
git commit -m "Add new feature: your feature description"
```

4. Push your changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

5. Open a pull request to the main repository, describing your changes in detail.

## 📄 License

This project is licensed under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright notice and permission notice are included in all copies or substantial portions of the software. For more details, see the MIT [LICENSE](https://opensource.org/licenses/MIT) file.

## ❓ Questions

If you have any questions about the project, please feel free to contact me directly:

GitHub: <a href="https://github.com/A-MOHAMED14">A-MOHAMED14</a>

Email: <a href="mailto:amin800@hotmail.co.uk">amin800@hotmail.co.uk</a>
