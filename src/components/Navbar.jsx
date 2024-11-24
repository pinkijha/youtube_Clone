import React from "react";
import Avatar from 'react-avatar';
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo_viewtube.png";
import profilePic from '../../public/profilepic.jpg'

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <MdOutlineMenu className="cursor-pointer text-3xl" />
        <img className="w-24 cursor-pointer" src={logo} alt="logo-img" />
      </div>

      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input className="outline-none w-[100%]" type="text" placeholder="Search" />
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          className="ml-3 border p-2 rounded-full cursor-pointer hover:bg-gray-200 duration-200"
          size={"42px"}
        />
      </div>

      <div className="flex items-center space-x-5 cursor-pointer">
      <RiVideoAddLine  size={"42px"} className="p-2 hover:bg-gray-200 duration-200 rounded-full" />
      <AiOutlineBell  size={"42px"}  className="p-2 hover:bg-gray-200 duration-200 rounded-full"  />
      <Avatar size="32" round={true} src={profilePic} alt="profilePic" />
      </div>
    </div>
  );
};

export default Navbar;
