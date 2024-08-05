import React from 'react'
import '../components/Header.css'
import { FaArrowRight } from "react-icons/fa";
import { CiCirclePlus } from 'react-icons/ci';
import { FiCopy } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="container w-[100%] borderColor h-auto mt-20 p-4 grid gap-3 homecss bg-[#212121] m-auto rounded-lg">
                {/* aboutme  */}
                <div className=" rounded-lg grid aboutme">
                    {/* aboutme-heading  */}
                    <div className="flex justify-between items-center mx-6">

                        <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                            <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
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
                                <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '><CiCirclePlus />Hire Me</button>
                                <button className='py-2 px-3 rounded-lg  text-sm font-bold text-white borderColor flex gap-3 items-center '><FiCopy />Copy Email</button>
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
                        <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '>View All
                            <div className="text-[#a2a2a2]">

                                <FaArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-rows-3 gap-3 mx-2 mb-6">
                        <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">
                            <div className="flex gap-3 items-center mx-5">
                                <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                                <div className="text-lg text-[#C0C0C0] mx-2">
                                    <p className='text-white'>Python AI Assistant</p>
                                    <p className='text-base'>Python , HTML ,CSS , Jquery</p>
                                </div>

                            </div>
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>
                        </div>

                        <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">
                            <div className="flex gap-3 items-center mx-5">
                                <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                                <div className="text-lg text-[#C0C0C0] mx-2">
                                    <p className='text-white'>Python AI Assistant</p>
                                    <p className='text-base'>Python , HTML ,CSS , Jquery</p>
                                </div>

                            </div>
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>

                        </div>
                        <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">
                            <div className="flex gap-3 items-center mx-5">
                                <div className="w-[50px] h-[50px] bg-white rounded-full"></div>
                                <div className="text-lg text-[#C0C0C0] mx-2">
                                    <p className='text-white'>Python AI Assistant</p>
                                    <p className='text-base'>Python , HTML ,CSS , Jquery</p>
                                </div>

                            </div>
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>

                        </div>


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
                    <div className="grid grid-rows-3 gap-3 mx-2 mb-6">
                        <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">
                            <div className=""></div>
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>
                        </div>
                        <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">
                            <div className=""></div>
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>

                        </div>
                        <div className="w-[90%] mx-auto bg-[#373737]  borderColor drop-shadow-2xl rounded-lg grid gridHomeTemplate ">
                            <div className=""></div>
                            <div className="flex items-center justify-center text-[25px] text-[#A0A0A0]"><IoIosArrowForward /></div>

                        </div>


                    </div>
                </div>
                <div className=" rounded-lg text-white text-center flex flex-col gap-3 items-center justify-center">
                    <h1 className='text-[36px] font-semibold'>Let’s work together.</h1>
                    <p className='text-[18px] text-[#BCBCBC]'>Creating user experience and visual appealing design</p>
                    <div className="flex gap-3 mt-2">
                        <button className='py-2 px-3 rounded-lg bg-[#373737] text-sm font-bold text-white borderColor flex gap-3 items-center '><CiCirclePlus />Hire Me</button>
                        <button className='py-2 px-3 rounded-lg  text-sm font-bold text-white borderColor flex gap-3 items-center '><FiCopy />Copy Email</button>
                    </div>
                </div>
                <div className="bg-[#2C2C2C] rounded-lg flex justify-between px-9 items-center">
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
                <div className="bg-[#2C2C2C] rounded-lg flex flex-col  items-center justify-center text-sm ">
                    <p className='text-[#C0C0C0]'>© 2024 All rights reserved. </p>
                    <p className='text-[#C0C0C0]'>by - <u className='text-white'>Deep Sarkar</u> </p>
                </div>

            </div>

        </>
    )
}

export default Home