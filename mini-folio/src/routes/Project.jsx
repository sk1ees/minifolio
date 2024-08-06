import React, { useState } from 'react'
import '../components/Header.css'
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiCopy, FiGithub } from 'react-icons/fi';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
const Project = () => {
  const [copy, setCopy] = useState('Copy Email');

  function copyClipboard() {
      navigator.clipboard.writeText('sarkarreall@gmail.com');
  }
  const projectData = [
    {
      project: "MiniFolio Website",
      skill: "React , GSAP",
      url: 'https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg',
      redirectURL: "https://github.com/sk1ees/minifolio",
    },
    {
      project: "Awwward Website Clone",
      skill: "React , GSAP , FramerMotion",
      url: 'https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg',
      redirectURL: "https://github.com/sk1ees/portfolio",
    },
    {
      project: "OCHI Website",
      skill: "React , GSAP , FramerMotion",
      url: 'https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg',
      redirectURL: "https://sk1ees.github.io/react-modern-website/",
    },
    {
      project: "AI Virtual Assistant",
      skill: "Python , HTML , CSS , JQuery",
      url: 'https://framerusercontent.com/images/x7OiTJeFKwzIYxxP0CC2nE86Gc.svg',
      redirectURL: "https://github.com/sk1ees/assistant-kaisen",
    },
    {
      project: "Jumble-Type Game",
      skill: "  HTML , CSS , Javascript",
      url: 'https://framerusercontent.com/images/NPGARQLpwPJCRgkLYdh9gzFYPEU.svg',
      redirectURL: "https://github.com/sk1ees/jumbleType",
    },
  ]
  window.scrollTo(0, 0);
  useGSAP(() => {
    gsap.from('.projectcss', {
      y: 100,
      duration: 0.5,
      opacity: 0,

    })
  })
  return (
    <>
      <div className="container w-[100%] borderColor h-auto mt-24 p-4 grid gap-3 projectcss bg-[#212121] m-auto rounded-lg">
        <div className=" rounded-lg flex flex-col gap-3 px-1 py-4 mx-4">
          <div className="">

            <div className="flex justify-between items-center ">

              <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                <div className="box w-[10px] h-[10px] rounded-full bg-[#626262] "></div>
                Projects
              </div>

            </div>
            <div className=" mb-3">
              <h1 className='text-[36px] text-white font-bold mt-6'>My Top Works</h1>
            </div>
            <div className="">
              <p className='text-[16px] text-[#C0C0C0] leading-relaxed'>Discover my portfolio, where development meet captivating design. My work strives to enhance experiences and inspire.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg mx-4 grid gap-4 grid-rows-5 py-8">
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
              <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]">
                <a href={item.redirectURL} target="_blank" rel="noopener noreferrer">

                  <IoIosArrowForward />
                </a>

              </div>
            </div>
          ))}

        </div>
        <div className="bg-[#2C2C2C] rounded-lg flex mx-4 justify-between px-9 items-center">
          <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
            <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
            Explore all of my works
          </div>
          <div className="flex gap-3 text-white text-2xl">
            <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
              <a href="https://github.com/sk1ees" target="_blank" rel="noopener noreferrer">

                <FiGithub />
              </a>

            </button>

          </div>

        </div>


        <div className=" rounded-lg mx-4 flex items-center justify-center">
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
        </div>

        {/* socials  */}
        <div className="bg-[#2C2C2C] rounded-lg flex mx-4 justify-between px-9 items-center">
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
        <div className="bg-[#2C2C2C] rounded-lg flex flex-col mx-4  items-center justify-center text-sm ">
          <p className='text-[#C0C0C0]'>© 2024 All rights reserved. </p>
          <p className='text-[#C0C0C0]'>by - <u className='text-white'>Deep Sarkar</u> </p>
        </div>

      </div>

    </>
  )
}

export default Project