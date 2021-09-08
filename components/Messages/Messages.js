import React from "react";
import { useSelector } from "react-redux";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

const Messages = ({ messages, name, currentUser }) => {
  return (
    <ScrollToBottom className="messages" followButtonClassName="scrollBtn">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} currentUser={currentUser} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
