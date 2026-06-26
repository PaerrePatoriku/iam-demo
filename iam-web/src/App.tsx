import { useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import Dash from './components/Dash'
import Public from './components/Public'

import './App.css'


function App() {

  const isAuthenticated = useAuthentication();
  return (
    <>
      <h1>
      Hello! 
      </h1>
      {isAuthenticated ? <Dash/> : <Public/> } 
    </>
  )
}

export default App
