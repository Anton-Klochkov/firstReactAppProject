import React from 'react';
import classes from '../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className = {classes.messages}>
            <img src = 'https://img3.goodfon.ru/original/960x854/d/fb/kiberpank-devushka-lico-ochki-4004.jpg'/> {props.messsage}
        </div>
    )

}
export default Message;