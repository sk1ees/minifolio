import React from 'react'
import '../components/Header.css'
import { IoIosArrowForward } from 'react-icons/io';
import { CiCirclePlus } from 'react-icons/ci';
import { FiCopy, FiGithub } from 'react-icons/fi';
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
    window.scrollTo(0, 0);
    const projectData = [
        {
            project: "Awwward Portfolio Design",
            skill: "React , GSAP ",
            url: 'https://framerusercontent.com/images/lkLwoc5QonpfJtmxeyujVtespnI.svg',
        },
        {
            project: "Awwward Website Clone",
            skill: "React , GSAP , FramerMotion",
            url: 'https://framerusercontent.com/images/GYZJhZwKqD1jeRCg4q155yCAVM.svg',
        },
    ]
    return (
        <>
            <div className="container w-[100%] borderColor h-auto mt-20 p-4 grid gap-3 aboutcss bg-[#212121] m-auto rounded-lg">
                <div className=" rounded-lg flex flex-col gap-3 px-1 py-4 mx-4">
                    <div className="">

                        <div className="flex justify-between items-center ">

                            <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                                <div className="box w-[10px] h-[10px] rounded-full bg-[#626262] "></div>
                                About
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-[36px] text-white font-bold mt-6'>It's Me Deep</h1>
                    </div>
                    <div className="">
                        <p className='text-[18px] text-[#C0C0C0] leading-relaxed'>I'm Deep Sarkar, a web developer and video editor based in Siliguri, West Bengal. I’m deeply passionate about crafting purposeful and innovative interfaces. Each day, I challenge myself with new front-end design projects, constantly pushing the boundaries of what's possible and striving to create seamless, user-centric experiences.</p>
                    </div>
                </div>
                <div className="bg-[#373737] rounded-lg mx-4 flex items-center justify-center">
                    <div className="aboutImg w-[94%] h-[94%]  rounded-lg"></div>
                </div>
                <div className=" rounded-lg mx-4">
                    <h1 className='text-[30px] text-white font-bold mt-6 mb-5'>More About Me</h1>
                    <p className='text-[18px] text-[#C0C0C0] leading-relaxed'>Deep Sarkar pursuing a bachelor's degree in Computer Application from a university in the Siliguri, WB and has a relentless drive for staying up-to-date with the latest technologies , design trends and github. Actively involved in the Linkdein community, Deep regularly participates in diverse design and coding challenges.</p>
                    <p className='text-[18px] text-[#C0C0C0] leading-relaxed mt-9'>When he's not immersed in professional work, he finds solace in editing videos and exploring new ideas in dribble. Deep firmly believes in maintaining a healthy work-life balance, making sure to take breaks and re-energize his creativity. In his spare time, he also play games.</p>
                </div>
                <div className=" rounded-lg mx-4 ">
                    <h1 className='text-[30px] text-white font-bold mt-3 mb-5'>My Side Projects</h1>
                    <p className='text-[18px] text-[#C0C0C0] leading-relaxed '>I did passion side projects in the weekend, <br />please take a look you will love it (i hope).</p>
                </div>
                <div className="bg-[#2C2C2C] rounded-lg mx-4 grid gap-4 grid-rows-2 py-8">
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
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>
                        </div>
                    ))}
                </div>
                <div className=" rounded-lg mx-4 flex items-center justify-center">
                    {/* quote-1  */}
                    <div className=" rounded-lg text-white text-center flex flex-col gap-3 items-center justify-center">
                        <h1 className='text-[36px] font-semibold'>Let’s work together.</h1>
                        <p className='text-[18px] text-[#BCBCBC]'>Creating user experience and visual appealing design</p>
                        <div className="flex gap-3 mt-2">
                            <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '><CiCirclePlus />Hire Me</button>
                            <button className='py-2 px-3 rounded-lg  text-sm font-bold text-white borderColor flex gap-3 items-center '><FiCopy />Copy Email</button>
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
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'><FiGithub /></button>
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'><FaInstagram /></button>
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'><FaBehance /></button>
                        <button className='bg-[#373737] w-[50px] h-[50px] flex items-center justify-center rounded-full'><FaLinkedinIn /></button>
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

export default About