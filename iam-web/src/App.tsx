import { useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import Dash from './components/Dash'
import Public from './components/Public'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const isAuthenticated = useAuthentication();

  return (
    <>
      <h1>
      Hello!  {count}
      </h1>
      {isAuthenticated ? <Dash/> : <Public/> } 
    </>
  )
}

export default App
