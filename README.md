# Currency Converter
> This is a small React application which allows the user to calculate currency conversions.



## General Information
- I undertook this project in order to familiarize myself with making API requests inside a React application
- Especially I wanted to gain insight about handling the requested data and how to manipulate in order to render it
- I watched the tutorial before trying it for myself which is why there are only slight differences in code
- The purpose of this project was just to learn new things



## Technologies Used
- React 17.0.2
- [Exchange Rates API](https://exchangeratesapi.io/)



## Features
- Converting one currency into another and back using the Exchange Rates API



## Screenshots
![Example screenshot](https://i.ibb.co/Ss0wr1y/currency-converter-screenshot.jpg)



## Demo
Live demo [_here_](https://clever-jennings-193293.netlify.app/).



## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Navigate to the project folder in the terminal and install the necessary NPM dependencies
```
npm install
```
3. Obtain an API key from the [Exchange Rates API](https://exchangeratesapi.io/)
4. Insert the API key into App.js
```
const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
```
5. Run the app typing
```
npm start
```
in your terminal and visit localhost:3000 in your browser.



## Learnings
- Using an API in React
- How to setup two way data binding in React
- Hiding API keys in React applications using environment variables and netlify functions



## Project Status
The project is finished. 



## Acknowledgements
- This project was based on [this tutorial](https://www.youtube.com/watch?v=XN5elYWiSuw)



