import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {store.getState()}
       addPost = {store.addPost.bind(store)}
       updateNewPostText = {store.updateNewPostText.bind(store)}
       sendMessage = {store.sendMessage.bind(store)}
       updateSendMessageText ={store.updateSendMessageText.bind(store)}/>
    </React.StrictMode>, 
    document.getElementById('root'));
};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
