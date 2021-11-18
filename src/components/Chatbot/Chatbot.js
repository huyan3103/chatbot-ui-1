import React, { useState } from "react";
import "boxicons";
import "./Chatbot.css";
import ChatbotOpen from "./ChatbotOpen";

import chatbotIcon from "../../image/avatar_chatbot.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleToggleZoom = () => {
    setZoom((zoom) => !zoom);
  };

  const handleZoomOut = () => {
    setZoom(false);
  };

  return (
    <div>
      <div className={`${zoom ? "chatbox zoom" : "chatbox"} `}>
        {isOpen ? (
          <ChatbotOpen
            setIsOpen={setIsOpen}
            zoom={zoom}
            handleToggleZoom={handleToggleZoom}
            handleZoomOut={handleZoomOut}
          />
        ) : (
          <ChatbotClose chatbotIcon={chatbotIcon} setIsOpen={setIsOpen} />
        )}
      </div>

      <div className={`${zoom ? "overlay active" : " overlay"}`}></div>
    </div>
  );
};

function ChatbotClose(props) {
  const { chatbotIcon, setIsOpen } = props;
  const handleOpenChatbox = () => {
    setIsOpen(true);
  };
  return (
    <div className="chatbox-icon chatbox-btn" onClick={handleOpenChatbox}>
      <img src={chatbotIcon} alt="" />
    </div>
  );
}

export default Chatbot;
