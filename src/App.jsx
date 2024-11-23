import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const {loading, data} = useAuth();
  console.log(loading);
  console.log(data)
  return (
    <>
    <Navbar/>
    <Sidebar/>
    </>
  )
}

export default App
