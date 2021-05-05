import React from 'react';
import { addMessage } from '../../../redux/state';
import classes from './../Dialogs.module.css';
import DialogItem from '../DialogsItem/DialogsItem';
import Message from '../Dialogs';

const Messages = (props) => {

  let dialogsElements =
  props.dialogsPage.dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} /> );
  let messagesElements = 
  props.dialogsPage.messagesData.map ( message => <Message message = {message.message} /> )

  let newMessageElement = React.createRef();
  
  let addMessage = () => {
    props.addMessage();
  }
 
  let onMessageChange = () =>{
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
      </div>
        <div className = {classes.new_message}>
          <textarea onChange = {onMessageChange} ref={ newMessageElement } 
          value = { props.newMessageText} /> 
          <button onClick= { addMessage }>Add message</button>
        </div>
        <div>
          <div>
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
    </div>
  )
}
export default Messages;


/* <div>
<textarea onChange={onMessageChange} ref={ newMessageElement }
   value = { props.newMessageText} />
<button onClick= { addPost }>Add message</button>
</div>

<textarea className= {classes.text_place} ref= {new_Message_Element}></textarea>
<button className={classes.button_new_message} onClick= { addMessage }>Add message</button> */