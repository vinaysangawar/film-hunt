# Film Hunt

## Introduction

Finally, after a long time waiting, you can search for that movie and get its details!!!

The application gets served up and ran from a NodeJS server. The server is responsible for handling the API of searching and fetching of movies and movie details. The data source is [http://www.omdbapi.com/](http://www.omdbapi.com/). By implementing the server model, one could expand the server to protect the routes via authentication, and the client would not have access to sensitive API keys.

The UI utilizes ReactJS, Typescript, Redux, Redux Thunks (for async processing of actions), and Bootstrap (for styling and responsiveness). 

As I have never used Typescript before, I thought this project presented the perfect opportunity to learn Typescript, along with React Hooks (as seen in the search_bar component to keep internal state). After using it for such a short time, I immediately saw the benefits in autocompletion, enhanced overall quality, and improved understandability in what to expect from method calls!

Areas of Improvement:
There are a few things that I would like to add just as a loader for API calls and some better error handling on the server side. I would also like to increase code coverage time permitting, but an example of how one could unit test these components can be found in the "header" and "movie_detail_modal" components.

![Screenshot](https://i.imgur.com/UuzjdYT.jpg)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this app locally:

1. Clone the project

```git clone https://github.com/vinaysangawar/film-hunt.git```

2. Change directories to project 

```cd film-hunt```

3. Run the following command at the project location - Assuming the latest (LTS) version of node js is already installed in the system.

```npm install```

4. Update OMDB_API_KEY value in the .env file in the root of the project with your OMDB key (replacing '12345678'). THIS FILE MAY BE HIDDEN ON YOUR SYSTEM. If you don't have an editor and don't feel like changing view permissions.
```Mac: "vi .env" or "nano .env"```
```Windows: "edit .env"```
Don't forget to save the file.

5. Run the server locally, it will compile the UI and run a local instance of NodeJS.

```npm run server```

6. Navigate to ```http://localhost:3001```

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the app in the "server" mode. This replicates how the webapp will be running on a webserver, running from the build folder.<br>
This script will compile everything needed to the 'build' folder which can be deployed to a server.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will NOT reload if you make edits. You must rerun the script to serve up from a fresh build folder.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

NOTE - To be able to make server requests, also run `node server/server.js`. Requests will be proxied to localhost:3001.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. The server will also get copied.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
