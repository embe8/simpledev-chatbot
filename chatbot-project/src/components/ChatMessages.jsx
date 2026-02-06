import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';

function ChatMessages({ 
    chatMessages }) {
      const chatMessageRef = useRef(null);
      useEffect(() => {
        const containerElem = chatMessageRef.current;
        if (containerElem) {
          containerElem.scrollTop = containerElem.scrollHeight;
        }
      }, [chatMessages]);
  
    return (
      <div className="chat-messages-container">
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })}
      </div>
    );
  }

  export default ChatMessages;