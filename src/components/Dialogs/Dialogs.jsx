import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  return (
    <div className={classes.message}>
    <DialogItem />
    <Message dialogsPage = {props.dialogsPage} 
        newMessageText= {props.dialogsPage.newMessageText}
        addMessage = {props.addMessage} 
        updateNewMessageText = {props.updateNewMessageText} /> 
     </div>
  )
}

export default Dialogs;