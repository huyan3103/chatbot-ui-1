import React, { useRef, useState, useEffect } from "react";
import "boxicons";
import "./Chatbot.css";
import ChatbotMessage from "./ChatbotMessage";
import chatbotIcon from "../../image/avatar_chatbot.png";
import WaveMessage from "./WaveMessage";
const Chatbot = () => {
  const [conversation, setConversation] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [enteredTextInput, setEnteredTextInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const chatboxInnerRef = useRef();

  useEffect(() => {
    if (chatboxInnerRef.current) {
      chatboxInnerRef.current.scrollTop = chatboxInnerRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleOpenChatbox = () => {
    setIsOpen(true);
  };

  const handleCloseChatbox = () => {
    setIsOpen(false);
  };

  const handleChangeInput = (event) => {
    setEnteredTextInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (enteredTextInput) {
      setConversation((preState) => {
        return [
          ...preState,
          {
            sender: "user",
            content: enteredTextInput,
          },
        ];

        // call API chatbot
      });
      getResponse(enteredTextInput);
    }

    setEnteredTextInput("");
  };

  const getResponse = async (input) => {
    // call API chatbot get answer

    setIsWaiting(true);
    let data = "";
    try {
      const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
      const responeData = await response.json();
      data = responeData.joke;
      console.log(responeData);
      // data = await respone.json().joke;
    } catch (ex) {
      data = "lỗi";
    }
    await setConversation((pre) => [
      ...pre,
      {
        sender: "bot",
        content: data,
      },
    ]);
    data = "";
    setIsWaiting(false);
  };

  let content = (
    <div className="chatbox-icon chatbox-btn" onClick={handleOpenChatbox}>
      <img src={chatbotIcon} alt="" />
    </div>
  );

  if (isOpen) {
    content = (
      <div className="chatbox-wapper">
        <div className="chatbox-header">
          <p>Ultimate Chatbot For Education</p>
          <div className="chatbox-btn" onClick={handleCloseChatbox}>
            <box-icon name="x" color="white"></box-icon>
          </div>
        </div>

        <div className="chatbox-inner" ref={chatboxInnerRef}>
          {conversation.map((message, index) => (
            <ChatbotMessage sender={message.sender} key={index}>
              {message.content}
            </ChatbotMessage>
          ))}

          {/* {isWaiting && <ChatbotMessage content={WaveMessage} sender="bot" />} */}
          {isWaiting && (
            <ChatbotMessage sender="bot">
              <WaveMessage />
            </ChatbotMessage>
          )}
        </div>

        <div className="chatbox-footer">
          <form onSubmit={handleSubmitForm}>
            <input
              type="text"
              placeholder="Send something ..."
              onChange={handleChangeInput}
              value={enteredTextInput}
            />
            <button
              className={`chatbox-btn ${enteredTextInput && "active"}`}
              type="submit"
              onClick={handleSubmitForm}
            >
              {/* <box-icon
        name="send"
        color={`${enteredTextInput && "#d82c2c"}`}
      ></box-icon> */}

              <box-icon
                type="solid"
                name="send"
                color={`${enteredTextInput && "#d82c2c"}`}
              ></box-icon>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <div className="chatbox">{content}</div>;
};

export default Chatbot;
