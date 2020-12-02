import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Messages = (props) => {

  let dialogsElements =
  props.dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} /> );

  let messagesElements = 
  props.messagesData.map ( message => <Message message = {message.message} /> )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {
          dialogsElements
        }
      </div>
      <div className={classes.messages}>
        {
          messagesElements
        }
      </div>
    </div>
  )
}
export default Messages;