import React from 'react'
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from 'next/link';

const Navbar = () => {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },

        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio"
        },

        {
            id: 3,
            title: "Blog",
            url: "/blog"
        },

        {
            id: 4,
            title: "About",
            url: "/about"
        },

        {
            id: 5,
            title: "Contact",
            url: "/contact"
        },

        {
            id: 6,
            title: "DashBoard",
            url: "/dashboard"
        },
    ]
  return (
    <div className="flex justify-between h-24 items-center mx-[10%]">
        <div className='cursor-pointer'>
            Digital Nepal
        </div>
        <div className="flex gap-5">
            {links.map((link)=>(
            <Link href={link.url} key={link.id}>{link.title}</Link>
            ))}
        </div>
        
    </div>
  )
}

export default Navbar