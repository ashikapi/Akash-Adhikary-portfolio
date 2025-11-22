import TypeWriter from '@/components/TypeWriter'
import React from 'react'
import Image from 'next/image'
import profileImage from '@/public/images/HomeBg.webp';
// import bgImage from '@/public/images/bg-image-12.jpg';
import '@/style/animations.css'

export default function Home() {
    return (
        <div className='w-full pt-10 bg-cover bg-center sm:flex-none flex justify-center items-center'
            style={{ backgroundImage: `url('images/bg-image-12.jpg')` }}>
            <div className='lg:flex lg:justify-center lg:items-center sm:text-start text-center'>
                <div className='lg:px-20 px-6'>
                    <h1 className='lg:text-3xl text-xl font-bold md:pb-6 pb-2'>Hello</h1>
                    <h2 className='lg:text-5xl text-3xl font-bold md:pb-6 pb-2'>i’m Akash Adhikary a</h2>
                    <TypeWriter />
                    <p className='md:w-2/3 p-1 md:text-xl text-lg text-[rgb(93,101,112)] pt-6'>
                        A personal portfolio is a collection of your work,
                        achievements, and skills that highlights your
                        abilities and professional growth. It serves as
                    </p>
                </div>
                <div className='lg:w-1/2 lg:-ml-96 w-full relative'>
                    <h1 className='lg:w-[600px] lg:text-7xl text-4xl font-extrabold absolute top-20 sm:left-0 left-1/7 animation-up-downU sm:flex-none flex justify-center items-center'>UI/UX DESIGNER</h1>
                    <Image src={profileImage} alt="profile image"
                        className='z-10 lg:w-[400px] lg:h-[600px] w-[250px] h-[350px] lg:ml-14 relative sm:left-0 left-1/5' />
                    <h1 className='lg:w-[600px] text-transparent text-outline stroke-black stroke-2 lg:text-7xl text-4xl sm:left-0 left-1/7 font-extrabold absolute bottom-20 animation-up-downB'>UI/UX DESIGNER</h1>
                </div>
            </div>
        </div>
    )
}
