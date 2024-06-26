import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8000/api/users")
    console.log(response.data.users)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
