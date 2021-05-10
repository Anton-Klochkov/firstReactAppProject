import React from 'react';
import classes from '../Dialogs.module.css';
import DialogItem from '../Dialogs/DialogsItem/DialogsItem';
import Message from '../Dialogs/Message/Message';


const Dialogs = (props) => {

  let dialogElements =
  props.dialogsPage.dialogs.map( d => <DialogItem name = {d.name} id = {d.id} /> );

  let messageElements = 
  props.dialogsPage.messages.map ( m => <Message message = {m.message} /> )


  return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          { dialogElements }
        </div>

        <div className={classes.messages}>
          { messageElements }
        </div>
        <div className={classes.message}>
          <MessageInput
            newMessageText = {props.dialogsPage.newMessageText}
            updateSendMessageText ={props.updateSendMessageText}
            sendMessage = { props.sendMessage} />
        </div>
    </div>
  )
}
export default Dialogs;