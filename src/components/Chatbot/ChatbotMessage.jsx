import React from "react";
import PropTypes from "prop-types";
import chatbotIcon from "../../image/avatar_chatbot.png";

import "./ChatbotMessage.css";

const ChatbotMessage = (props) => {
  const message = props.children;
  let content = "";
  if (typeof message === "string") {
    content = message.split("\n").map((item, index) => (
      <span className="chatbot-message-content" key={index}>
        {item}
      </span>
    ));
  } else {
    content = message;
  }
  return (
    <div className={`chatbot-message ${props.sender}`}>
      <div className="chatbot-message-line">
        <span></span>
        <div className="chatbot-message-line-main">
          {props.sender === "bot" && <img src={chatbotIcon} alt="" />}
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

ChatbotMessage.propTypes = {
  // content: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default ChatbotMessage;
