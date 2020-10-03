import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Messages = (props) => {

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


  let dialogsElements = dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} /> );

  let messagesElements = messagesData.map ( message => <Message message = {message.message} /> )

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