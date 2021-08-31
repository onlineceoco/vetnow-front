import React from "react";
import { useSelector } from "react-redux";

import classes from "./Message.module.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const authState = useSelector(state => state.auth);

  const trimmedName = name.trim().toLowerCase();

  if (user === authState.user._id) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={[classes.messageContainer, classes.justifyEnd].join(" ")}>
      <div className={[classes.messageBox, classes.backgroundBlue].join(" ")}>
        <p className={[classes.messageText, classes.colorWhite].join(" ")}>
          {text}
        </p>
      </div>
    </div>
  ) : (
    <div className={[classes.messageContainer, classes.justifyStart].join(" ")}>
      <p className={[classes.sentText, classes.pr - 10].join(" ")}>
        {trimmedName}
      </p>
      <div className={[classes.messageBox, classes.backgroundLight].join(" ")}>
        <p className={[classes.messageText, classes.colorDark].join(" ")}>
          {text}
        </p>
      </div>
      {/* <p className={[classes.sentText, classes.pl-10].join(" ")}>{user}</p> */}
    </div>
  );
};

export default Message;
