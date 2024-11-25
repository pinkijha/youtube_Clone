import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidApi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";

const VideoPlaying = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  // FetchVideoDetails
  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  // Suggested Video -> fetchRelated Video API
  const fetchRelatedVideo = () =>{
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res.contents);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] ml-[100px] mt-16">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-500px)] xl:w-[100%-400px] px-4 py-3  lg:py-6">
          <div className="h-[200px] md:h-[450px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          {/* channel logo & title */}
          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4  ">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden ">
                  <img
                    className="h-full w-full object-cover "
                    src={video?.author?.avatar[0]?.url}
                    alt="channel-logo"
                  />
                </div>
              </div>

              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] ml-1 text-[12px]" />
                    )}
                  </div>

                  <div className="text-sm">
                    {video?.author?.stats.subcribersText}
                  </div>
                </div>
                <span
                  className="mt-1 text-center bg-rose-500 px-3 pt-2 rounded-full text-white
                cursor-pointer hover:bg-red-400"
                >
                  Subscribe
                </span>
              </div>
            </div>

            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes, 2)}Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                {`${abbreviateNumber(video?.stats?.views, 2)}Likes`}
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        
      <div>
        <SuggestedVideo />
      </div>

      </div>
    </div>
  );
};

export default VideoPlaying;
