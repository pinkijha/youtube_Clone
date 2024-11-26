import React, { useEffect, useState } from "react";
import Avatar from 'react-avatar';
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo_viewtube.png";
import profilePic from '../../public/profilepic.jpg'
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoMdArrowRoundBack } from "react-icons/io";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // call UtilsContext Variable
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [ searchBar, setSearchBar ] = useState(false);

  useEffect(() => {
    console.log({isSidebar, mobileShow});
  },[isSidebar])

  const navigate = useNavigate();

  const searchQueryHandler = (event) =>{
    if((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length>0){
      navigate(`/search/${searchQuery}`);
      setSearchQuery(' ')
    }
  };

  // MenuBar
  const handleSidebar = () => {
    if(window.innerWidth <= 1280){
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  }

  if (searchBar){
    return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
      <IoMdArrowRoundBack size={20} onClick={() => setSearchBar(!searchBar)} />
       <div className="flex flex-grow items-center mx-4">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
           className="outline-none w-[100%]" type="text" placeholder="Search" />
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100"
        onClick={() => searchQueryHandler('searchButton')}>
          <CiSearch size={"24px"} />
        </button>
        
      </div>
      <IoMdMic
          className="ml-3 border p-2 rounded-full cursor-pointer hover:bg-gray-200 duration-200"
          size={"42px"}
        />
    </div>
    )
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <MdOutlineMenu className="cursor-pointer text-3xl" 
        onClick={handleSidebar}
        />
        <img className="w-24 cursor-pointer" src={logo} alt="logo-img" />
      </div>

      <div className="hidden md:flex  w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
           className="outline-none" type="text" placeholder="Search" />
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100"
        onClick={() => searchQueryHandler('searchButton')}>
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          className="ml-3 border p-2 rounded-full cursor-pointer hover:bg-gray-200 duration-200"
          size={"42px"}
        />
      </div>

      <div className="flex items-center space-x-5 cursor-pointer">
        <CiSearch className="text-2xl md:hidden" onClick={() => setSearchBar(!searchBar)} />
      <RiVideoAddLine  size={"42px"} className="p-2 hover:bg-gray-200 duration-200 rounded-full" />
      <AiOutlineBell  size={"42px"}  className="p-2 hover:bg-gray-200 duration-200 rounded-full"  />
      <Avatar size="32" round={true} src={profilePic} alt="profilePic" />
      </div>
    </div>
  );
};

export default Navbar;
