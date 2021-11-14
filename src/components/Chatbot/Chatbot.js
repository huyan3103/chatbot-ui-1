import React, { useState } from "react"
import "boxicons"
import "./Chatbot.css"
import ChatbotOpen from "./ChatbotOpen"

import chatbotIcon from "../../image/avatar_chatbot.png"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="chatbox">
      {isOpen ? (
        <ChatbotOpen setIsOpen={setIsOpen} />
      ) : (
        <ChatbotClose chatbotIcon={chatbotIcon} setIsOpen={setIsOpen} />
      )}
    </div>
  )
}

function ChatbotClose(props) {
  const { chatbotIcon, setIsOpen } = props
  const handleOpenChatbox = () => {
    setIsOpen(true)
  }
  return (
    <div className="chatbox-icon chatbox-btn" onClick={handleOpenChatbox}>
      <img src={chatbotIcon} alt="" />
    </div>
  )
}

export default Chatbot
