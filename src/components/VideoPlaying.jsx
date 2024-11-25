import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {fetchData} from '../utils/rapidApi'
import ReactPlayer from 'react-player';
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoPlaying = () => {
  const [ video, setVideo ] = useState();
  const [ relatedVidei, setRelatedVideo ] = useState();
  const {id} = useParams();

  useEffect(()=>{
    fetchVideoDetails();
  },[id]);

  const fetchVideoDetails = () =>{
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res)
    })
  }
  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] ml-[100px] mt-16'>
      <div className='w-full max-w-[1580px] flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-[calc(100%-600px)] xl:w-[100%-400px] px-4 py-3  lg:py-6'>
            <div className='h-[200px] md:h-[450px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0'>
              <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height='100%' width='100%' controls style={{backgroundColor:'#000000'}}
              playing={true}
              />
            </div>
            <div>
              <div>                
              <span className="font-bold text-sm line-clamp-2">
                {video?.title}
              </span>
              
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
              </span>

              <div className='flex mt-4 md:mt-0'>
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                <AiOutlineLike className='text-xl mr-2' />
                {`${abbreviateNumber(video?.stats?.likes,2)}Likes`}
                </div>
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>               
                {`${abbreviateNumber(video?.stats?.views,2)}Likes`}
                </div>
              </div>

              <div className='p-4 bg-gray-100 rounded-xl mt-4 text-sm'>
                {video?.description}
              </div>
              <div className='flex gap-x-6 font-semibold rounded-xl mt-4 text-xl'>
                {video?.stats?.comments} <p>Comments</p>
              </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlaying
