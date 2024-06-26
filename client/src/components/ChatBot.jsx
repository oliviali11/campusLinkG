import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './custom.css'


const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const textareaRef = useRef(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:8000/chat', { message });
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const adjustTextareaSize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.width = 'auto';
      textarea.style.width = `${textarea.scrollWidth}px`;
    }
  };

  return (
    <div className="px-4">
      <textarea
        ref={textareaRef}
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message here"
        onKeyDown={adjustTextareaSize}
        className='border border-gray-300'
      />
      <div>
      <button onClick={handleSendMessage} className='btn navlink font-gaegu text-xl'>Send</button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2 font-gaegu">Response:</h2>
        {response ? (
          <div>
            {response.hits.map((hit, index) => (
              <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
                <h3 className="text-lg font-bold mb-2">{hit.title}</h3>
                <p className="text-gray-700 mb-2">{hit.description}</p>
                <ul className="list-disc ml-6">
                  {hit.snippets.map((snippet, idx) => (
                    <li key={idx} className="mb-1">{snippet}</li>
                  ))}
                </ul>
                <a
                  href={hit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No response yet.</p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
