import { useState, useRef, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import './App.css';

function ChatInput({ chatMessages, setChatMessages }) {

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

function ChatMessage(props) {//props can be { message, sender }
//const message = props.message; destructuring:
const { message, sender } = props;
//const sender = props.sender;

/*if (sender === 'robot') {
  return (
    <div>
      <img src="robot.png" width="50" />
      {message}
    </div>
  );
}*/

  return (
    <div className={ 
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src="robot.png" 
        className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message}
      </div>
      { sender === 'user' && (
        <img src="user.png" 
        className="chat-message-profile"/>
      )}
    </div>
  );
}

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

function App() {
  const array = useState([{
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
  const [chatMessages, setChatMessages] = array // array destructuring
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
    <div classname="app-container">

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
