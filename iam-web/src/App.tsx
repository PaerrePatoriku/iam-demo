import { useState } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import Dash from './components/Dash'
import Public from './components/Public'

import './App.css'


function App() {

  const isAuthenticated = useAuthentication();
  return (
    <>
      {isAuthenticated ? <Dash/> : <Public/> } 
    </>
  )
}

export default App
