let store = {
  _state: {
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
          dialogs: [
              { id: '1', name: 'Viktor' },
              { id: '2', name: 'Sveta' },
              { id: '3', name: 'Sasha' },
              { id: '4', name: 'Dmitriy' },
              { id: '5', name: 'Valera' },
              { id: '6', name: 'Irina' }
            ],
          messages: [
              { id: '1', message: "We are you from" },
              { id: '2', message: "I'm from Russia" },
              { id: '3', message: "Go to steer" },
              { id: '4', message: "First react project" },
              { id: '5', message: "Go to react" },
            ],
          newMessageText: ''
      },
  
    sideBar:{
      friendsData: [
        { id: '3', name: 'Sasha' },
        { id: '6', name: 'Irina' },
        { id: '4', name: 'Dmitriy' },
      ]
    }
  },
  _callSubscriber() {
    console.log('State chnge');
  },
  getState() {
      return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

//post
  dispatch(action){
    if (action.type === 'ADD-POST'){
      let newPost = {
        id: 17,
        message: this._state.profilePage.newPostText,
        likesCount: 3
      };
        this._state.profilePage.postData.push (newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
      }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
    }
  },

//message
  sendMessage() {
    let sendMessage ={
      id: 22,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push (sendMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber();
  },
  updateSendMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber();
  }



  

}
export default store;
window.store = store;