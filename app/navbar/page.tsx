import React from 'react'
import { FaFacebookF,FaInstagram ,FaLinkedinIn,FaTwitter } from "react-icons/fa6";
import { MdViewList } from "react-icons/md";
import Image from 'next/image';
import logo from '@/public/images/navbar-logo.webp'

export default function Navbar() {

    const socialInfo = [
        {id:1,icon:<FaInstagram /> , link:'https://www.instagram.com/'},
        {id:2,icon:<FaLinkedinIn /> , link:'https://www.linkedin.com/'},
        {id:3,icon:<FaTwitter /> , link:'https://www.twitter.com/'},
        {id:4,icon:<FaFacebookF /> , link:'https://www.facebook.com/'},
    ];

  return (
    <nav className='bg-[#f4f4f4] p-4 h-16 w-full fixed z-20 top-0 opacity-70'>
        <div className='flex md:justify-evenly justify-between items-center'>
            <div>
                <Image src={logo} alt='logo' width={80} height={80} />
            </div>
            <ul className='md:flex hidden justify-evenly gap-10 items-center font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className='md:flex hidden justify-center text-center items-center gap-4'>
                {socialInfo.map((social)=>(
                    <a key={social.id} href={social.link} target='_blank' rel='noopener noreferrer' 
                    className='p-2 rounded-full bg-white hover:bg-[#ff014f]
                     transition-all hover:ease-in-out duration-1000 transform text-center text-lg
                     hover:text-white'>
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className='sm:hidden block'>
                <button><MdViewList size={20}/></button>
            </div>
        </div>
    </nav>
  )
}
