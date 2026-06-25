import { useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import Dash from './components/Dash'
import Public from './components/Public'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const isAuthenticated = useAuthentication();
  
  return (
    <div>
      Hello!
      {isAuthenticated ? <Dash/> : <Public/> } 
    </div>
  )
}

export default App
