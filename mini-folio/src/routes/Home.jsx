import React, { useState } from 'react'
import '../components/Header.css'
import { FaArrowRight } from "react-icons/fa";
import { CiCirclePlus } from 'react-icons/ci';
import { FiCopy } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [copy, setCopy] = useState('Copy Email');
    window.scrollTo(0, 0);
    function copyClipboard() {
        navigator.clipboard.writeText('sarkarreall@gmail.com');
    }
    const projectData = [
        {
            project: "Python AI Assistant",
            skill: "Python , HTML , CSS , Jquery",
            url: 'https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg',
            redirectURL: 'https://github.com/sk1ees/assistant-kaisen',
        },
        {
            project: "Awwward Website Clone",
            skill: "React , GSAP , FramerMotion",
            url: 'https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg',
            redirectURL: 'https://sk1ees.github.io/react-modern-website/',
        },
        {
            project: "Jumble-Type Game",
            skill: "HTML , CSS , Javascript",
            url: 'https://framerusercontent.com/images/NPGARQLpwPJCRgkLYdh9gzFYPEU.svg',
            redirectURL: 'https://github.com/sk1ees/jumbleType',
        },
    ]
    const experienceData = [
        {
            title: "Freelance",
            desc: "video editing , web development",
            url: 'https://yt3.googleusercontent.com/Ws_BpAWD46mOjCW3XCnsZ0YmghW-6fhMf6d9pvCvb4g8JJftgvL54039U1mgh31OchR4ApMTezc=s900-c-k-c0x00ffffff-no-rj',
            redirectURL: 'https://bento.me/synccr',
        },
        {
            title: "Projects",
            desc: "college projects",
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png',
            redirectURL: 'https://github.com/sk1ees',
        },

    ]
    useGSAP(() => {
        gsap.from('.homecss', {
            y: 100,
            duration: 0.5,
            opacity: 0,

        })
    })
    return (
        <>
            <div className="container w-[100%] borderColor h-auto mt-24 p-4 grid gap-3 homecss bg-[#212121] m-auto rounded-lg">
                {/* aboutme  */}
                <div className=" rounded-lg grid aboutme">
                    {/* aboutme-heading  */}
                    <div className="flex justify-between items-center mx-6">

                        <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                            <div className="box w-[10px] h-[10px] rounded-full bg-[#626262] "></div>
                            Web Developer
                        </div>
                        <button className='py-1 px-3 rounded-full bg-[#223A2F] text-[12px] font-bold text-[#059152] borderColor flex gap-3 items-center uppercase'>
                            <div className="box w-[9px] h-[9px] rounded-full bg-[#28C780] "></div>
                            Available for Work

                        </button>
                    </div>
                    {/* aboutme-grid  */}
                    <div className="grid aboutmeRight">
                        <div className="flex flex-col gap-3 items-start justify-center m-4">

                            <p className='text-[36px] text-white font-bold '>I’m Deep Sarkar</p>
                            <p className='text-[18px] text-[#BCBCBC]  '>Web Developer from Bengal, IN. Currently pursuing BCA (3rd Year)</p>
                            <div className="flex gap-3 mt-2">
                                <Link to={'/contact'}>
                                    <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '>  <CiCirclePlus />Hire Me</button>
                                </Link>

                                <button onClick={() => { setCopy("Copied!"), copyClipboard() }} className='py-2 px-3 rounded-lg  text-sm font-bold text-white borderColor flex gap-3 items-center '><FiCopy />{copy}</button>
                            </div>
                        </div>
                        <div className="flex items-center  justify-center">
                            <div className="w-[11vw] h-[11vw] rounded-full bg-[#2C2C2C] border border-[#414141] flex items-center justify-center">
                                <div className="w-[90%] h-[90%] rounded-full bg-white profilePic"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* projects  */}
                <div className="bg-[#2C2C2C] rounded-lg grid projects">
                    <div className="flex justify-between items-center mx-6">

                        <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                            <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
                            Projects
                        </div>
                        <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '>
                            <Link to={'/projects'}>
                                View All
                            </Link>
                            <div className="text-[#a2a2a2]">

                                <FaArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-rows-3 gap-3 mx-2 mb-9">

                        {projectData.map(item => (

                            <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">

                                <div className="flex gap-3 items-center mx-5">

                                    <div className="w-[55px] h-[55px] bg-[#2C2C2C] rounded-full flex items-center  justify-center">
                                        <div className="w-[80%] h-[80%]  rounded-full bg-contain"
                                            style={{ backgroundImage: `url(${item.url})` }}
                                        >

                                        </div>
                                    </div>
                                    <div className="text-lg text-[#C0C0C0] mx-2">

                                        <p className='text-white'>{item.project}</p>
                                        <p className='text-base'>{item.skill}</p>
                                    </div>

                                </div>

                                <div className="flex items-center justify-center text-[25px]  cursor-pointer text-[#A0A0A0] hover:ps-1 transition-all hover:text-white">     <a href={item.redirectURL} target="_blank" rel="noopener noreferrer"><IoIosArrowForward /></a></div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* experience  */}
                <div className="bg-[#2C2C2C] rounded-lg grid projects">
                    <div className="flex justify-between items-center mx-6">

                        <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                            <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
                            Experience
                        </div>

                    </div>
                    <div className="grid grid-rows-2 gap-3 mx-2 mb-9">
                        {experienceData.map((item) => (

                            <div className="w-[90%]  mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate cursor-pointer ">

                                <div className="flex gap-3 items-center mx-5">
                                    <div className="w-[55px] h-[55px] bg-[#2C2C2C] rounded-full flex items-center  justify-center">
                                        <div className="w-[80%] h-[80%]  rounded-full bg-contain"
                                            style={{ backgroundImage: `url(${item.url})` }}
                                        >

                                        </div>
                                    </div>
                                    <div className="text-lg text-[#C0C0C0] mx-2">

                                        <p className='text-white'>{item.title}</p>
                                        <p className='text-base'>{item.desc}</p>
                                    </div>

                                </div>
                                <div className="flex items-center justify-center text-[22px] hover:rotate-45 transition-all text-[#A0A0A0]"><a href={item.redirectURL} target='_blank'><MdArrowOutward /> </a></div>
                            </div>



                        ))}
                    </div>
                </div>

                {/* quote-1  */}
                <div className=" rounded-lg text-white text-center flex flex-col gap-3 items-center justify-center">
                    <h1 className='text-[36px] font-semibold'>Let’s work together.</h1>
                    <p className='text-[18px] text-[#BCBCBC]'>Creating user experience and visual appealing design</p>
                    <div className="flex gap-3 mt-2">
                        <Link to={'/contact'}>
                            <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '><CiCirclePlus />Hire Me</button>
                        </Link>

                        <button onClick={() => { setCopy("Copied!"), copyClipboard() }} className='py-2 px-3 rounded-lg  text-sm font-bold text-white borderColor flex gap-3 items-center '><FiCopy />{copy}</button>
                    </div>
                </div>
                {/* socials  */}
                <div className="bg-[#2C2C2C] rounded-lg flex justify-between px-9 items-center">
                    <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                        <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
                        Follow Me
                    </div>
                    <div className="flex gap-3 text-white text-2xl">
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                            <a href="https://github.com/sk1ees" target="_blank" rel="noopener noreferrer">
                                <FiGithub />
                            </a>
                        </button>
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                            <a href="https://www.instagram.com/deeeprr/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>

                        </button>
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                            <a href="https://www.behance.net/synccr" target="_blank" rel="noopener noreferrer">

                                <FaBehance />
                            </a>
                        </button>
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                            <a href="https://www.linkedin.com/in/deep-sarkar-92b453245/" target="_blank" rel="noopener noreferrer">

                                <FaLinkedinIn />
                            </a>

                        </button>
                    </div>

                </div>
                {/* copyright  */}
                <div className="bg-[#2C2C2C] rounded-lg flex flex-col  items-center justify-center text-sm ">
                    <p className='text-[#C0C0C0]'>© 2024 All rights reserved. </p>
                    <p className='text-[#C0C0C0]'>by - <u className='text-white'>Deep Sarkar</u> </p>
                </div>

            </div>

        </>
    )
}

export default Home