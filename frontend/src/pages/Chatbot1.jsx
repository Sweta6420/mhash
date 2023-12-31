import { useState, useEffect }  from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import OpenAI from 'openai';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';



const Chatbot1 = () => {
    // const API_KEY = 'sk-sMmjy1hJgS1s8gCQFESNT3BlbkFJrcDhftL8lxHDZlzvuQmfv'
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Shanti! Ask me anything!",
      sentTime: "just now",
      sender: "Shanti",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToShanti([...messages, newMessage]);
      if (response) {
        const ShantiResponse = {
          message: response.content,
          sender: "Shanti",
        };
        setMessages((prevMessages) => [...prevMessages, ShantiResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToShanti(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "Shanti" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "I'm a Student using Shanti as a mental help therapist." },
        ...apiMessages,
      ],
    };
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true
    });
    const response = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: "I'm a Student using Shanti as a mental help therapist." },
          ...apiMessages,
        ],
        model: 'gpt-3.5-turbo',
    });
    console.log(response.choices[0].message.content)
    const data =  response.choices[0].message;
        return data;
    // const API_KEY = 'sk-sMmjy1hJgS1s8gCQFESNT3BlbkFJrcDhftL8lxHDZlzvuQmfv'
    // const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": "Bearer " + API_KEY,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(apiRequestBody),
    // });

    // return response.json();
}
  

  return (
    // <div className="" >
    //   <div className="" style={{ position:"relative", height: "80vh", width: "80vw", padding: "5px"}}>
      <div className='qwerty-123'>
        <MainContainer className='padding-12'>
          
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Shanti is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} style={{textAlign:"left"}} />
              })}
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
          </ChatContainer>
        </MainContainer>
        <div className='resources-12'><h1>Resources</h1>
      <h3>Books</h3>
        <a href='https://www.indiebound.org/book/9780062364814'><u>Ends of the World</u></a><br></br><br></br>
        <h3>Articles</h3>
        <a href='https://www.unicef.org/environment-and-climate-change'><u>Climate change and environment</u></a><br></br><br></br>
        <h3>Meditation</h3>
        <p>Zen Meditation for Beginners by Bonnie Myotai Treace</p>
        <p>The No-Nonsense Meditation Book by Steven Laureys, MD</p>
        </div>
      </div>
    // {/* //   </div>
    // // </div> */}
  )
}

export default Chatbot1;