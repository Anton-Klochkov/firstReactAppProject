import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
  { id: '1', message: "My first day in a new city", likesCount: 78 },
  { id: '2', message: "Friends Please go to the lake", likesCount: 59 },
  { id: '3', message: "My like movie, Ender's Game", likesCount: 68 },
  { id: '4', message: "Good day, my friends called me out on the street", likesCount: 36 },
  { id: '5', message: "Hallo World", likesCount: 24 }
]


let dialogsData = [
  { id: '1', name: 'Viktor' },
  { id: '2', name: 'Sveta' },
  { id: '3', name: 'Sasha' },
  { id: '4', name: 'Dmitriy' },
  { id: '5', name: 'Valera' },
  { id: '6', name: 'Irina' }
];

let messagesData = [
  { id: '1', message: "We are you from" },
  { id: '2', message: "I'm from Russia" },
  { id: '3', message: "Go to steer" },
  { id: '4', message: "First react project" }
]



ReactDOM.render(
  <React.StrictMode>
    <App postData= {postData} dialogsData= {dialogsData} messagesData= {messagesData} />
  </React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
