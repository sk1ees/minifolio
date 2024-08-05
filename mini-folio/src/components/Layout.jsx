import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <div className="w-full  bg-[#161616]">
                <div className="container w-[40%] h-auto  m-auto p-4">

                    <Header />

                    <Outlet />


                </div>
            </div>

        </>
    )
}

export default Layout