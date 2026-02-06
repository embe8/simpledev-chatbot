import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css';


function App() {
  const [chatMessages, setChatMessages] = useState([{
    message:'Hello, chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message:'Hello, how can I help you today?',
    sender: 'robot',
    id: 'id2'
  }, {
    message:'can you get todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message:'todays date is 25/10/2025',
    sender: 'robot',
    id: 'id4'
  }]);
  //const chatMessages = array[0]; // first value is the current data
  //const setChatMessages = array[1]; // second value is the function to update the data


  /*const chatMessageComponents = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
      />
    );

  }); this can be inserted directly in return below*/

  return (
    <div className="app-container">

      <ChatMessages 
        chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App
