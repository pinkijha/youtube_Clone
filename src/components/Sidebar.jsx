import React from "react";
import {
    AiOutlineHome,
  TiFlashOutline,
  MdSubscriptions,
  GoHistory,
  MdOutlinePlaylistPlay,
  CiYoutube,
  BsStopwatch,
  BiLike,
  BsFire,
  RiShoppingBag4Line,
  LuMusic4,
  RiMovie2Line,
  CgMediaLive,
  SiYoutubegaming,
  FaRegNewspaper,
  TfiCup,
  SiYoutubeshorts,
  MdOutlineKeyboardArrowRight,
  PiLightbulbBold,
  GiHanger,
  SiYoutubestudio,
  SiYoutubekids,
  FaYoutube,
  SiYoutubemusic,
  MdOutlineSubscriptions,
} from "../components/icons.jsx";
import { BiPodcast } from "react-icons/bi";
import { useUtils } from "../context/UtilsContext";

const Sidebar = () => {

  
  // call UtilsContext Variable
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils()
 
  const sidebarItems = [
    {
      groupName: 'You',
      groupItems: [
        {
          id: 1,
          name: "History",
          icon: <GoHistory />,
        },
        {
          id: 2,
          name: "Playlists",
          icon: <MdOutlinePlaylistPlay />,
        },
        {
          id: 3,
          name: "Your Videos",
          icon: <CiYoutube />,
        },
        {
          id: 4,
          name: "Watch Later",
          icon: <BsStopwatch />,
        },
        {
          id: 5,
          name: "Liked Videos",
          icon: <BiLike />,
        },

      ],

    },
    {
      groupName: 'Explore',
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <BsFire />,
        },
        {
          id: 2,
          name: "Shoping",
          icon: <RiShoppingBag4Line />,
        },
        {
          id: 3,
          name: "Music",
          icon: <LuMusic4 />,
        },
        {
          id: 4,
          name: "Movies",
          icon: <RiMovie2Line />,
        },
        {
          id: 5,
          name: "Lives",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sports",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <PiLightbulbBold />,
        },
        {
          id: 10,
          name: "Fashion & Beauty",
          icon: <GiHanger />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <BiPodcast />,
        },

      ],
      
    },
    {
      groupName: 'More From Youtube',
      groupItems: [
        {
          id: 1,
          name: 'YouTube Premium',
          icon: <FaYoutube />
      },
      {
          id: 2,
          name: 'YouTube Studio',
          icon: <SiYoutubestudio />
      },
      {
          id: 3,
          name: 'YouTube Music',
          icon: <SiYoutubemusic />
      },
      {
          id: 4,
          name: 'YouTube Kids',
          icon: <SiYoutubekids />
      },

      ],
      
    }
  ]

  const ModelOverlay = () =>{
    return (
      <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30 "
      onClick={() => setMobileShow(!mobileShow)}>

      </div>
    )
  }

  return (
    <>
    <div className={`${mobileShow
       ? 'fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]'
       :'hidden h-[calc(100vh-6.625ream)] w-[30%]'} 
       xl:static xl:block px-2 lg:px-6 shadow-lg  overflow-y-scroll overflow-x-hidden`}>
      <ul>
        <li className=" cursor-pointer  p-2 rounded-lg hover:bg-gray-300">
          <a className=" space-x-5 cursor-pointer flex my-2" to={"/"}>
            {" "}
            <AiOutlineHome className=" text-lg mx-1" /> <span className=" text-sm mx-1">Home</span>
          </a>
        </li>
        <li className="flex cursor-pointer p-2  space-x-5 rounded-lg hover:bg-gray-300 my-3">
          <SiYoutubeshorts className=" text-lg mx-1" /> <span className=" text-sm mx-1">Shorts</span>
        </li>
        <li className="flex cursor-pointer space-x-5  p-2 rounded-lg hover:bg-gray-300 my-3">
          <MdOutlineSubscriptions className=" text-lg mx-1" />
         <span className=" text-sm mx-1" > Subscriptions</span>
        </li>
      </ul>
      <hr className="mt-4" />

      {/* You Part */}
        {/* <div className="flex item-center space-x-2 ">
          
      <h1 className="font-bold text-xl ml-4 pt-4">You</h1>
          <MdOutlineKeyboardArrowRight className="font-bold text-2xl ml-6 mt-6 items-center" />
        </div> */}

        <div className="space-y-3 items-center">
          {sidebarItems.map((group) => {
            return (
             <div className="mb-5">
                <h1 className="font-bold">{group.groupName}</h1>
                {
                  group.groupItems.map((item) => (

                    <div key={item.id} className="flex items-center space-x-6 cursor-pointer  p-2 rounded-xl hover:bg-gray-300 my-3">
                    <span className=" text-xl">{item.icon}</span>
                    <span className="text-sm ">{item.name}</span>
                  </div>
                  ))}
             </div>
            );
          })}
        </div>
     
      <hr className="mt-4" />

      
      <div className="ml-5 my-2 p-2 text-xs font-semibold text-gray-600">
        <p className="my-3" >About Press Copyright <br/>  Contact us Creators<br/> Advertise Developers</p>
        <p className="my-3" >Terms Privacy Policy & Safety How YouTube works<br/> Test new features</p>
        <p className="my-3 text-xs text-gray-400" >© 2024 Google LLC</p>
      </div>

    </div>
      {  mobileShow ? <ModelOverlay/> : null}
    </>
  );
};

export default Sidebar;
