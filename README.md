# giphy-react-app

<br />
<p align="center">
  <h3 align="center">GIPHY REACT APP</h3>

  <p align="center">
    A simple React application that displays images from giphy with an infinite scroll
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

This app was not using create-react-app for initialization but using webpack/babel to transpile JSX, ES6 and React specific syntax.
Unit tests written using Jest/Enzyme were also included for most files.


### Built With

* React/Redux
* Webpack/Babel
* Jest/Enzyme
* Giphy API


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/ken-do/giphy-react-app.git
```
2. Install NPM packages
```sh
npm install
```

3. Get an API Key from GIPHY 
https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key

4. Create a .env file and add an environment variable named GIPHY_API_KEY and set the API key obtained in the previous step as it value
```sh
GIPHY_API_KEY=<YOUR_GIPHY_API_KEY>
```

5. Start a project by running
```sh
npm start
```
