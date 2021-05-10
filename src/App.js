import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import Dialogs from './components/Dialogs/Dialogs';






const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          
          <Route path='/Profile' /* <-- content */
           render={ () => < Profile /* <-- url */ 
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          
          
          <Route path='/Dialogs'
           render={() => < Dialogs 
           dialogsPage={props.state.dialogsPage}
           sendMessage = {props.sendMessage}
           updateSendMessageText={props.updateSendMessageText} />} />
          
          
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
