import React from 'react'
import '../components/Header.css'
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import { CiCirclePlus } from 'react-icons/ci';
const About = () => {
    window.scrollTo(0, 0);

    const skillsItem = [

        {
            image: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-512.png",
        },
        {
            image: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-css-style-develop-layout-language-512.png",
        },
        {
            image: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
        },
        {
            image: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
        },
        {
            image: "https://miro.medium.com/v2/resize:fit:632/1*KTAstxDm8yEG17u94avrXw.png",
        },
        {
            image: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-64.png",
        },
        {
            image: "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png",
        },
        {
            image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
    ]
    const toolItem = [

        {
            image: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png",
        },
        {
            image: "https://cdn1.iconfinder.com/data/icons/designer-skills/128/premiere-256.png",
        },
        {
            image: "https://cdn1.iconfinder.com/data/icons/adobe-family/512/Premiere-256.png",
        },
        {
            image: "https://cdn1.iconfinder.com/data/icons/designer-skills/128/photoshop-512.png",
        },
      
    ]
    return (
        <>
            <div className="container w-[100%] borderColor h-auto mt-20 p-4 grid gap-3 skillcss bg-[#212121] m-auto rounded-lg">
                <div className=" rounded-lg flex flex-col gap-3 px-1 py-4 mx-4">
                    <div className="">

                        <div className="flex justify-between items-center ">

                            <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                                <div className="box w-[10px] h-[10px] rounded-full bg-[#626262] "></div>
                                Projects
                            </div>

                        </div>
                        <div className=" mb-3">
                            <h1 className='text-[36px] text-white font-bold mt-6'>My Languages</h1>
                        </div>
                        <div className="">
                            <p className='text-[16px] text-[#C0C0C0] leading-relaxed'>During my programming and designing journey , these are the skills that i am familiar while using it.</p>
                        </div>
                    </div>
                </div>
                {/* skills  */}
                <div className="bg-[#2C2C2C] rounded-lg grid gap-6 skillcssChild">
                    <div className="">

                        <div className=" bg-[#373737] rounded-lg flex mx-4 my-7 justify-between px-9 py-4 items-center">
                            <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                                <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
                                Programming Languages
                            </div>


                        </div>

                        <div className="flex flex-wrap gap-9 items-center justify-center mx-3  ">

                            {skillsItem.map((item) => (

                                <div className="w-[100px] h-[100px] rounded-xl bg-[#373737] flex items-center justify-center ">
                                    <div className="w-[70%] h-[70%] rounded-full    bg-cover" style={{ backgroundImage: `url(${item.image}) ` }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">

                        <div className=" bg-[#373737] rounded-lg flex mx-4 my-5 justify-between px-9 py-4 items-center">
                            <div className="text-[20px] text-[#C0C0C0] flex gap-3 items-center ">
                                <div className="box w-[10px] h-[10px] rounded-full bg-[#C0C0C0] "></div>
                                Tools Used
                            </div>


                        </div>

                        <div className="flex flex-wrap gap-9 items-center justify-center mx-3 ">

                            {toolItem.map((item) => (

                                <div className="w-[100px] h-[100px] rounded-xl bg-[#373737] flex items-center justify-center ">
                                    <div className="w-[70%] h-[70%] rounded-full    bg-cover" style={{ backgroundImage: `url(${item.image}) ` }}></div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <div className=" rounded-lg mx-4  flex items-center justify-center">
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