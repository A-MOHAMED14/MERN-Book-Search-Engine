# MERN: Book Search Engine

## Description

The MERN: Book Search Engine is a full-stack web application that allows users to search for books, save their favorite books, and view their saved books list. Originally built with a RESTful API, this project has been refactored to use GraphQL with Apollo Server for improved performance and flexibility.

## 🎥 Application Demo

As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:

![Animation shows "star wars" typed into a search box and books about Star Wars appearing as results.](./assets/demo-01.gif)

The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:

![Animation shows user clicking "Save This Book!" button to save books that appear in search results. The button label changes to "Book Already Saved" after it is clicked and the book is saved.](./assets/demo-02.gif)

A user can view their saved books on a separate page, as shown in the following animation:

![The Viewing Lernantino's Books page shows the books that the user Lernaninto has saved.](./assets/demo-03.gif)

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
