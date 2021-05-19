import React from 'react';
import classes from '../../Dialogs.module.css';


const MessageInput = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text};
        props.dispatch(action);
    }


    return (
        <div className={classes.new_message}>
            <div>
                <textarea onChange={ onMessageChange } ref= { newMessage } placeholder = {'Write a message ...'} value={ props.newMessageText } />
            </div>
            <div>
                <button onClick={sendMessage} className={classes.btn + '' + classes.btn1}>Send Message</button>
            </div>
        </div>
    )
}
export default MessageInput;
