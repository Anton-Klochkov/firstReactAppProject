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
import Dialogs from './components/Dialogs/Dialogs';






const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Profile' render={() => < Profile postData={props.postData} />} />
          <Route path='/Messages' render={() => < Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
          <Route path='/Music' render={() => < Music />} />
          <Route path='/News' render={() => < News />} />
          <Route path='/Settings' render={() => < Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
