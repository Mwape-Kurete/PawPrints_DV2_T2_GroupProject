<<<<<<< HEAD
# PawPrints
## Overview

PawPrints is a pet adoption application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register, log in, upload pet listings, like and comment on pets, and adopt pets. Admin users can approve pet listings and manage users.

## Table of Contents
- [Mockups](#mockups)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Group members](#Group-members)
- [Contributing](#contributing)
- [License](#license)

## Mockups


## Features

- User authentication (registration and login)
- Upload pet listings with images
- Like and comment on pet listings
- Adopt pets
- Admin approval for pet listings
- Admin user management
- Responsive design

## Tech stack
- **MongoDB Atlas**: A NoSQL database for storing user and pet data.
- **Express.js**: A web application framework for Node.js, used to build the backend API.
- **React**: A JavaScript library for building user interfaces, used for the frontend of the application.
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, used to build the backend server.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used to make API requests from the frontend.
- **JWT (JSON Web Tokens)**: Used for user authentication.
- **Bcrypt**: A library to hash passwords, used to enhance security by storing hashed passwords.
- **Multer**: A middleware for handling multipart/form-data, used for uploading images.

## Installation

1. **Clone the repository**
```
git clone https://github.com/RP231013/PawPrints_DV2_T2_GroupProject
cd pawprints 
```

2. **Set up the backend**
```
cd backend
npm install
```

3. **Set up the frontend**
```
cd ../frontend
npm install
```

4. **Configure environment variables:**
Create a .env file in the backend directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. **Start the development servers**
```
cd backend
npm start
```

```
cd ../frontend
npm start
```

6. **Open your browser**
Navigate to `http://localhost:3000` to use the application.

## Usage
#### Registration and Login

Users can register and log in to the application. Admins are identified by their email domain (@ppadmin.com).

#### Uploading Pet Listings

Registered users can upload pet listings with details such as name, type, age, breed, sex, color, and image.

#### Liking and Commenting

Users can like and comment on pet listings. Comments include the user's name and comment text.

#### Adopting Pets

Users can adopt pets, which changes the pet's status to adopted and records the adopting user's details.

#### Admin Functions

Admins can approve pet listings and manage users.

## API Endpoints

### User Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user
- `GET /api/users/:id` - Get user details
- `GET /api/users/pets/listed/:id` - Get user's listed pets
- `GET /api/users/pets/liked/:id` - Get user's liked pets
- `GET /api/users/pets/adopted/:id` - Get user's adopted pets

### Pet Listing Routes

- `POST /api/petlisting/upload` - Upload a pet image
- `POST /api/petlisting/add` - Add a new pet listing
- `GET /api/petlisting/unapproved` - Get all unapproved pet listings
- `PUT /api/petlisting/approve/:id` - Approve a pet listing
- `GET /api/petlisting` - Get all pet listings
- `GET /api/petlisting/:id` - Get a pet listing by ID
- `POST /api/petlisting/like/:id` - Like a pet listing
- `POST /api/petlisting/comment/:id` - Add a comment to a pet listing
- `PUT /api/petlisting/adopt/:id` - Adopt a pet
- `DELETE /api/petlisting/:id` - Delete a pet listing



## Group members
- Rouxan Potgieter
- Tebogo Ramobaleng
- Ricard Oosthuizen
- Michaela Kemp

## Contributing

Fork the repository
Create your feature branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add your feature')
Push to the branch (git push origin feature/your-feature)
Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> a7ec8b0 (Update Admin Sidebar)
