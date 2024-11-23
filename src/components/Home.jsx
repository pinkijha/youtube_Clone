import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from '../context/AuthProvider'

const Home = () => {
    const { data } = useAuth();
    console.log(data)
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
        {
            data.map((item) => {
                if ()
                    
            <Video key={item.id} video={item.video}/>
            })
            }
      </div>
    </div>
  )
}

export default Home
