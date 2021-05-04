import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Message from './components/Dialogs/Dialogs';
import Messages from './components/Dialogs/Message/Message';






const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          
          <Route path='/Profile' /* <-- content */
           render={ () => < Profile /* <-- url */ 
            profilePage={props.state.postData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          
          
          <Route path='/Messages'
           render={() => < Messages 
           messagesData={props.dialogsPage.messagesData}
           addMessage = {props.addMessage}
           updateNewMessageText={props.updateNewMessageText} />} />
          
          
          <Route path='/Music' render={() => < Music />} />

          
          
          <Route path='/News' render={() => < News />} />

          
          
          <Route path='/Friends'
           render={() => < Friends state={props.state.sideBar} />} />

          
          
          <Route path='/Settings' render={() => < Settings />} />

        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
