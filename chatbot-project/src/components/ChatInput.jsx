import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
export function ChatInput({ chatMessages, setChatMessages }) {

    const [inputText, setInputText] = useState('');
  
  
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  
  function sendMessage() {
    const newChatMessages = [
        ...chatMessages,
        {//adds new message to the end of the array
          message: inputText,
          sender: 'user',
          id: crypto.randomUUID()
        }
      ];
  
    setChatMessages(newChatMessages);
  
      const response = Chatbot.getResponse(inputText);
      setChatMessages([
        ...newChatMessages,
        {//adds the user message and then the robot message to the end of the array
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
  
      //empty input text field after sending message
      setInputText('');//then need to update html so add props value={inputText} in return
  }
  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
  }
  