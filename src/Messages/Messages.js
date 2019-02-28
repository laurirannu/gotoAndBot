import React from "react";
import './Messages.css'

class Messages extends React.Component {
    renderMessage = (message, key) => {
        const { username, text, date } = message;
        const { currentUser } = this.props;
        const messageFromMe = username === currentUser; //võrdlen, kas sõnum on kasutajalt
        const className = messageFromMe ? //vastavalt eelnevale võrdlusele tekitan klassinime, et CSSis muuta sõnumite asukohti
            "message message--user" : "message message--bot";
        return (
            <li className={className} key={key}> 
                {!messageFromMe && <img src={require("../icons/robot.jpg")} alt = "logo" className="bot-image" />}
                <div className="message__content">
                    <div className="message__username">
                        <span>{username}</span>
                        <span className="message__date">{date.toTimeString().substring(0,5)}</span>
                    </div>
                    <div className="message__text">{text}</div>
                </div>
            </li>
        );
    }

    render() {
        const { messages } = this.props;
        return (
            <ul className="messages-wrapper">
                {messages.map((m, key) => this.renderMessage(m, key))}
            </ul>
        );
    }
}

export default Messages;