import React from 'react'
import { Link } from 'react-router-dom'

const Video = ({video}) => {
    console.log(video)
  return (
    <div className='flex'>
     <Link to={`/video/${video?.videoId}`}>
     <div className='flex'>
        <div className='h-48 md:h-56 md:rounded-xl hover:rounded-none 
                        duration-200 overflow-hidden'>
            <img className='flex h-full w-full' 
            src={video?.thumbnails[0]?.url} 
            alt='thumbnail-img' />
        </div>
     </div>
     </Link>
    </div>
  )
}

export default Video
