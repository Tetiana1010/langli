import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import ChatPage from './pages/chat-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatPage history={[]} />
    </>
  )
}

export default App
