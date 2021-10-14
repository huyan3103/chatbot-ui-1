import React from "react";
import PropTypes from "prop-types";
import chatbotIcon from "../../image/avatar_chatbot.png";

import "./ChatbotMessage.css";

const ChatbotMessage = (props) => {
  return (
    <div className={`chatbot-message ${props.sender}`}>
      <div className="chatbot-message-line">
        <span></span>
        <div className="chatbot-message-line-main">
          {props.sender === "bot" && <img src={chatbotIcon} alt="" />}
          <span className="chatbot-message-content">{props.children}</span>
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
