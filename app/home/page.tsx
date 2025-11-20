import TypeWriter from '@/components/TypeWriter'
import React from 'react'
import Image from 'next/image'
import profileImage from '@/public/images/HomeBg.webp';
// import bgImage from '@/public/images/bg-image-12.jpg';
import '@/style/animations.css'

export default function Home() {
    return (
        <div className='w-full pt-10 bg-cover bg-center'
        style={{backgroundImage: `url('images/bg-image-12.jpg')`}}>
            <div className=' flex justify-center items-center'>
                <div className=' px-20'>
                    <h1 className='text-3xl font-bold pb-6'>Hello</h1>
                    <h2 className='text-5xl font-bold pb-6'>i’m Akash Adhikary a</h2>
                    <TypeWriter />
                    <p className='w-2/3 p-1 text-xl text-[rgb(93,101,112)] pt-6'>A personal portfolio is a collection of your work,
                        achievements, and skills that highlights your
                        abilities and professional growth. It serves as
                    </p>

                </div>
                <div className='w-1/2 -ml-96 relative'>
                    <h1 className='w-[600px] text-7xl font-extrabold absolute top-20 animation-up-downU'>UI/UX DESIGNER</h1>
                    <Image src={profileImage} width={400} height={400} alt="profile image" 
                    className='z-10 ml-14 relative'/>
                    <h1 className='w-[600px] text-transparent text-outline stroke-black stroke-2 text-7xl font-extrabold absolute bottom-20 animation-up-downB'>UI/UX DESIGNER</h1>
                </div>
            </div>
        </div>
    )
}
