import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import VideoPlaying from './components/VideoPlaying'
import { useAuth } from './context/AuthProvider'
import Loading from './loader/Loading'

const App = () => {
const { loading } = useAuth();
  return (
    <>
    {loading && <Loading/>}
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/search/:searchQuery' element={<Search/>} />
      <Route path='/video/:id' element={<VideoPlaying/>} />
    </Routes>
    </>
  )
}

export default App
