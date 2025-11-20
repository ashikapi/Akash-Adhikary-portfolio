import React from 'react'
import { FaFacebookF,FaInstagram ,FaLinkedinIn,FaTwitter } from "react-icons/fa6";
import footerLoogo from '@/public/images/fooer_logo.webp';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import Image from 'next/image';

export default function Footer() {
    const socialInfo = [
        {id:1,icon:<FaInstagram /> , link:'https://www.instagram.com/'},
        {id:2,icon:<FaLinkedinIn /> , link:'https://www.linkedin.com/'},
        {id:3,icon:<FaTwitter /> , link:'https://www.twitter.com/'},
        {id:4,icon:<FaFacebookF /> , link:'https://www.facebook.com/'},
    ];

    const quickLinks = [
        { title: 'Home', href: '#' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];
    const contacts = [
        { icon: <IoMdMail/> ,type: 'Email', value: 'akashadhikary@example.com', href: '' },
        { icon: <FaLocationDot/> ,type: 'Address', value: 'Mirpur, Dhaka-1212, Bangladesh', href: '' },
        { icon: <FaPhone/> ,type: 'Phone', value: '+88 01xxxxxxxxx', href: 'tel:' },
    ];

  return (
    <div className='bg-[#f4f4f4] py-14 px-20'>
        <div className='grid grid-cols-3 gap-4'>
            <div>
                <Image src={footerLoogo} alt="footer logo" width={100} height={100} className='m-4'/>
                <p className='text-2xl w-96 pt-4 pb-5 m-4 text-[rgb(93,101,112)]'>
                    <span className=' font-extrabold text-black'>Get Ready</span> To Create<br /> Great
                </p>
                <div className='m-4'>
                <input type="email" placeholder='Email Adress'
                className='relative outline-none focus:outline-none p-1 w-64 border-b-2 border-gray-300' />
                <button className=' text-black px-6 py-2 absolute left-77 '>
                    <IoMdMail size={20}/>
                </button>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold pb-5'>Quick Links</h1>
                {quickLinks.map((link, index) => (
                    <div key={index} className='grid justify-start items-center pt-3'>
                        <a href={link.href} className='text-lg text-[rgb(93,101,112)] hover:text-black hover:underline'>
                        {link.title}
                    </a>
                    </div>
                ))}
            </div>
            <div>
                <h1 className='text-xl font-bold pb-5'>Contact</h1>
                {contacts.map((contact, index) => (
                    <div key={index} className='flex justify-start items-center pt-5 gap-4'>
                        <h2 className='text-2xl p-2 border-2 border-gray-300 rounded-full'>{contact.icon}</h2>
                        <a href={contact.href} className='text-lg  hover:text-black hover:underline'>
                            {contact.value}
                        </a>
                    </div>
                ))}
                <div className='flex justify-start pt-10 text-center items-center gap-6'>
                {socialInfo.map((social)=>(
                    <a key={social.id} href={social.link} target='_blank' rel='noopener noreferrer' 
                    className='p-2 rounded-full bg-[#e7e7e7] hover:bg-[#ff014f]
                     transition-all hover:ease-in-out duration-1000 transform text-center text-lg
                     hover:text-white'>
                        {social.icon}
                    </a>
                ))}
            </div>
            </div>
        </div>
        <hr 
        className='mt-40 opacity-20'/>
        <div className='pt-5 flex justify-between items-center'>
            <h1>© Inversweb 2025 | All Rights Reserved</h1>
            <div className='grid grid-cols-3 gap-10'>
                <h2>Trams & Condition</h2>
                <h2>Privacy Policy</h2>
                <h2>Contact Us</h2>
            </div>
        </div>
    </div>
  )
}
