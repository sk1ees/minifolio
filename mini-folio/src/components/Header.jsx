import React from 'react'
import './Header.css'
import { GoHomeFill } from "react-icons/go";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { BsPerson } from "react-icons/bs";
const Header = () => {
    return (
        <div className="  container w-[38%] h-[10vh] bg-[#212121]  borderColor drop-shadow-2xl rounded-xl fixed grid grid-cols-2 z-[999]">
            <div className="flex gap-7 items-center px-6 ">
                <Link to={'/'} className='text-2xl text-gray-400 hover:text-gray-200 transition-all'><BiHomeAlt2 /></Link>
                <Link to={'/about'} className='text-2xl text-gray-400 hover:text-gray-200 transition-all'><BsPerson /></Link>
                <Link to={'/projects'} className='text-2xl text-gray-400 hover:text-gray-200 transition-all'><GoProjectSymlink /></Link>
                <Link to={'/my-skills'} className='text-2xl text-gray-400 hover:text-gray-200 transition-all'><BsLightningCharge /></Link>


            </div>
            <div className="flex items-center justify-end gap-4 pe-5">
                <p className='text-2xl text-gray-400'><FiSun /></p>
                <Link to={'/contact'}>
                    <button className='text-white bg-[#373737] p-2 px-3 rounded-lg flex gap-2 items-center'><CiCirclePlus />Hire Me</button>
                </Link>

            </div>
        </div>
    )
}

export default Header