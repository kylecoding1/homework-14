# CMS-style Blog Site

A content management system (CMS) style blog site that allows developers to write and publish articles, blog posts, and share their thoughts and opinions. The blog site features user authentication, blog post creation, editing, and deletion, as well as commenting on existing blog posts.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies](#technologies)
5. [Contributing](#contributing)
6. [License](#license)

## Features

- User authentication: sign up, sign in, and logout
- Create, edit, and delete blog posts
- View and comment on existing blog posts
- Dashboard to manage user's own blog posts

## Installation

1. Install [Node.js](https://nodejs.org/) and npm (Node.js Package Manager) on your system.
2. Clone or download the repository.
3. Open a terminal/command prompt in the root folder of the project (where the `app.js` file is located).
4. Run the following command to install the required packages:

```bash
npm install express ejs mongoose passport passport-local express-session connect-flash

5. Set up MongoDB on your system or use a cloud-based MongoDB service like MongoDB Atlas.
6. Update the MongoDB connection URI in the app.js file with your local or cloud-based database connection details.

## Usage 
1. Make sure your MongoDB server is running if you're using a local installation.

2. Execute the app.js file using Node.js with the following command in your terminal/command prompt:
node app.js

3. Open your web browser and navigate to http://localhost:3000.

## Technologies

Node.js
Express
EJS (Embedded JavaScript) templates
MongoDB
Mongoose
Passport
Express-session
Connect-flash

Project Links:
