import React from "react";
import {addResponseMessage, Widget,} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ChatBox = (props) => {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // eslint-disable-next-line no-undef
        addResponseMessage("Welcome to Ment FinTech Ltd!");
    }
    // const getCustomLauncher = (handleToggle) => (<button className="chatlio" onClick={handleToggle}>Contact Us</button>);

    return(
        <Widget
            handleNewUserMessage={handleNewUserMessage}
            title={"Welcome to Ment FinTech Ltd"}
            subtitle={""}
            // launcher={handleToggle => getCustomLauncher(handleToggle)}
            launcher={props.open}
            className={'chatbox'}
            // handleToggle={props.show}
        />
    )
}

export default ChatBox;
