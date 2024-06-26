import React from 'react'
import Chatbot from '../components/ChatBot'

const AssistantPage = () => {
  return (
    <>
    <h1 className='text-2xl text-bold text-center text-archivo-black pt-6 font-gaegu'>Claremont Intelligent Assistant</h1>
    <h2 className='text-2xl text-bold text-center text-archivo-black font-gaegu'>AMA about transporation, restaurants, social events!</h2>
    <Chatbot />
    </>
  )
}

export default AssistantPage