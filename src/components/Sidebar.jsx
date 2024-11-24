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

const Sidebar = () => {
  const sidebarItems = [
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
  ];

  const sidebarItems1 = [
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
    },,
    {
      id: 9,
      name: "Courses",
      icon: <PiLightbulbBold />,
    },,
    {
      id: 10,
      name: "Fashion & Beauty",
      icon: <GiHanger />,
    },,
    {
      id: 11,
      name: "Podcasts",
      icon: <BiPodcast />,
    },
  ];

  const sidebarItem2 =[
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
  ]

  return (
    <div className="px-3 shadow-lg w-[30%] h-[calc(110vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      <ul>
        <li className=" cursor-pointer p-2 rounded-lg hover:bg-gray-300">
          <a className="cursor-pointer flex my-2" to={"/"}>
            {" "}
            <AiOutlineHome className=" text-2xl mx-2" /> Home
          </a>
        </li>
        <li className="flex cursor-pointer p-2 rounded-lg hover:bg-gray-300 my-2">
          <SiYoutubeshorts className=" text-xl mx-2" /> Shorts
        </li>
        <li className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
          <MdOutlineSubscriptions className=" text-2xl mx-2" />
          Subscriptions
        </li>
      </ul>
      <hr className="mt-4" />

      {/* You Part */}
        <div className="flex item-center space-x-2 ">
          
      <h1 className="font-bold text-xl ml-4 pt-4">You</h1>
          <MdOutlineKeyboardArrowRight className="font-bold text-2xl ml-6 mt-6 items-center" />
        </div>

        <div>
          {sidebarItems.map((item) => {
            return (
              <div key={item.id} className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
                <span className=" text-xl mx-2">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </div>
            );
          })}
        </div>
     
      <hr className="mt-4" />

      {/* Explore */}

      <h1 className="font-bold text-xl ml-4 pt-4">Explore</h1>
      <div>
        {sidebarItems1.map((item) => (
          <div key={item.id}  className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
            <span className=" text-xl mx-2">{item.icon}</span>
           <span className="text-sm"> {item.name}</span>
          </div>
        ))}
      </div>

      <hr className="mt-4" />

      {/* More Section */}
      <h1 className="font-bold text-lg ml-4 pt-4">More From YouTube</h1>
      <div>
        {sidebarItem2.map((item) => (
          <div key={item.id}  className="flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2">
            <span className=" text-xl mx-2    text-red-600">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      <hr className="mt-4" />
      <div className="ml-5 my-2 p-2 text-xs font-semibold text-gray-600">
        <p className="my-3" >About Press Copyright <br/>  Contact us Creators<br/> Advertise Developers</p>
        <p className="my-3" >Terms Privacy Policy & Safety How YouTube works<br/> Test new features</p>
        <p className="my-3 text-xs text-gray-400" >© 2024 Google LLC</p>
      </div>

    </div>
  );
};

export default Sidebar;
