import React, { useEffect } from 'react'
import '../components/Header.css'
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiCopy, FiGithub } from 'react-icons/fi';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Contact = () => {

    useEffect(() => {
        document.title = "Portfolio - Contact";
      }, []);

    const projectData = [
        {
            project: "Awwward Portfolio Design",
            skill: "React , GSAP ",
            url: 'https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg',
        },
        {
            project: "Awwward Website Clone",
            skill: "React , GSAP , FramerMotion",
            url: 'https://framerusercontent.com/images/11rNeoQ4cbIflUKMKRcTruAT4.svg',
        },
        {
            project: "OCHI Website",
            skill: "React , GSAP , FramerMotion",
            url: 'https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg',
        },
        {
            project: "AI Virtual Assistant",
            skill: "Python , HTML , CSS , JQuery",
            url: 'https://framerusercontent.com/images/x7OiTJeFKwzIYxxP0CC2nE86Gc.svg',
        },
        {
            project: "Jumble-Type Game",
            skill: "  HTML , CSS , Javascript",
            url: 'https://framerusercontent.com/images/NPGARQLpwPJCRgkLYdh9gzFYPEU.svg',
        },
    ]
    window.scrollTo(0, 0);
    useGSAP(() => {
        gsap.from('.contactcss', {
            y: 100,
            duration: 0.5,
            opacity: 0,

        })
    })
    return (
        <>
            <div className="container w-[100%] borderColor h-auto mt-24 p-4 grid gap-3 contactcss bg-[#212121] m-auto rounded-lg">
                <div className=" rounded-lg flex flex-col gap-3 px-1 py-4 mx-4">
                    <div className="">

                        <div className="flex justify-between items-center ">

                            <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                                <div className="box w-[10px] h-[10px] rounded-full bg-[#626262] "></div>
                                Hire Me
                            </div>
                            <button className='py-1 px-3 rounded-full bg-[#223A2F] text-[12px] font-bold text-[#059152] borderColor flex gap-3 items-center uppercase'>
                                <div className="box w-[9px] h-[9px] rounded-full bg-[#28C780] "></div>
                                Available for Work

                            </button>

                        </div>
                        <div className=" mb-3">
                            <h1 className='text-[36px] text-white font-bold mt-6'>Work Enquiries</h1>
                        </div>
                        <div className="">
                            <p className='text-[16px] text-[#C0C0C0] leading-relaxed'>Got an idea and need help? Reach out now !</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#212121] mx-4 rounded-lg grid formcss gap-3">
                    <div className="flex items-center justify-center gap-3">
                        <input type="text" name="" id="" className='w-full h-full rounded-lg border-none outline-none px-4 text-white bg-[#2C2C2C]' placeholder='Name' />
                        <input type="text" name="" id="" className='w-full h-full rounded-lg border-none outline-none px-4 text-white bg-[#2C2C2C]' placeholder='Email' />
                    </div>
                    <div className="">
                        <textarea name="" id="" className='w-full h-full rounded-lg border-none outline-none p-4 text-white bg-[#2C2C2C]' placeholder='Message'>

                        </textarea>
                    </div>
                    <div className="">
                        <button className='w-full h-[60%] rounded-lg font-bold bg-[#424242] text-white'>Submit Inquiry</button>
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

                <div className="bg-[#2C2C2C] rounded-lg flex flex-col mx-4  items-center justify-center text-sm ">
                    <p className='text-[#C0C0C0]'>© 2024 All rights reserved. </p>
                    <p className='text-[#C0C0C0]'>by - <u className='text-white'>Deep Sarkar</u> </p>
                </div>

            </div>

        </>
    )
}

export default Contact