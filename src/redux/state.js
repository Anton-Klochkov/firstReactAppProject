import { rerenderEntireTree } from "../render";

let state = {
  profilePage:{
        postData: [
            { id: '1', message: "My first day in a new city", likesCount: 78 },
            { id: '2', message: "Friends Please go to the lake", likesCount: 59 },
            { id: '3', message: "My like movie, Ender's Game", likesCount: 68 },
            { id: '4', message: "Good day, my friends called me out on the street", likesCount: 36 },
            { id: '5', message: "Hallo World", likesCount: 24 }
          ],
        newPostText: 'it-kamasutra'
    },
  dialogsPage:{
        dialogsData: [
            { id: '1', name: 'Viktor' },
            { id: '2', name: 'Sveta' },
            { id: '3', name: 'Sasha' },
            { id: '4', name: 'Dmitriy' },
            { id: '5', name: 'Valera' },
            { id: '6', name: 'Irina' }
          ],
        messagesData: [
            { id: '1', message: "We are you from" },
            { id: '2', message: "I'm from Russia" },
            { id: '3', message: "Go to steer" },
            { id: '4', message: "First react project" },
            { id: '5', message: "Go to react" },
          ],
        newMessageText: 'new-text'
    },

  sideBar:{
    friendsData: [
      { id: '3', name: 'Sasha' },
      { id: '6', name: 'Irina' },
      { id: '4', name: 'Dmitriy' },
    ]
  }
  }
window.state = state;

//post
export let  addPost = (postMessage) => {
    let newPost = {
      id: 17,
      message: state.profilePage.newPostText,
      likesCount: 3
    };
      state.profilePage.postData.push (newPost);
      state.profilePage.newPostText = '';
      rerenderEntireTree(state);
  };

export let  updateNewPostText = (newText) => {
      state.profilePage.newPostText = newText;
      rerenderEntireTree(state);
  };



//message
export let addMessage = (chatMessage) => {
  let newMessage ={
    id: 22,
    message: state.dialogsPage.messagesData
  };
  state.dialogsPage.messagesData.push (newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}          
export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}


export default state;
