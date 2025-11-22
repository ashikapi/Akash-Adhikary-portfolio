import SkillBars from '@/components/SkillBars';
import React from 'react'
import { FaPencilRuler, FaNetworkWired,FaLightbulb  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Skills() {
    const skills = [
        { id: 1, name: 'Web Design', level: '120 Projects', icon: <FaPencilRuler /> },
        { id: 2, name: 'Ui/Ux Design', level: '241 Projects', icon: <FaNetworkWired /> },
        { id: 3, name: 'Web Research', level: '240 Projects', icon: <FaLightbulb  /> },
        { id: 4, name: 'Marketing', level: '331 Product', icon: <MdOutlineEmail /> },
    ];
    
    const completed = [
        { title: 'Our Project Complete', complete: '20K+' },
        { title: 'Our Natural Products', complete: '10K+' },
        { title: 'Clients Reviews', complete: '200+' },
        { title: 'Our Satisfied Clients', complete: '1,000+' },
    ];
    
    const birthday = '2000-08-15';
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    let yearsDifference = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        yearsDifference--;
    }

    // For experience, if yearsDifference is more than 2, display the number of years over 2
    let experience = yearsDifference === 2 ? '2' : (yearsDifference > 2 ? `${yearsDifference - 22}` : 'Less than 2');

    return (
        <div className='sm:px-0 px-6 sm:py-0 py-6'>
            <div className='grid md:grid-cols-4 grid-cols-1 md:px-20 md:py-20 px-6 py-6'>
                {skills.map((skill, index) => (
                    <div key={index} className='border-2 border-[#ffefef] p-10 space-y-2 m-4 rounded-lg'>
                        <h2 className='text-5xl text-[#ff0955] font-bold flex justify-center items-center gap-2'>
                            {skill.icon}
                        </h2>
                        <h1 className='text-xl font-bold flex justify-center items-center gap-2'>{skill.name}</h1>
                        <p className='text-gray-600 text-lg font-semibold flex justify-center items-center gap-2'>{skill.level}</p>
                    </div>
                ))}
            </div>
            <div className='pt-6 pb-10'>
                <div className='md:flex md:justify-center md:items-center md:gap-20'>
                    <div className='bg-[#f4f4f4] rounded-xl md:px-32 md:py-10'>
                        <div className='flex md:justify-normal justify-center items-center sm:pt-0  pt-5 space-x-6'>
                            <h1 className='font-extrabold font-sans md:text-9xl text-6xl text-[#ff014f]'>{experience}</h1>
                            <h2 className='font-bold md:text-5xl text-2xl'>Years Of <br />experience</h2>
                        </div>
                        <p className='md:w-96 sm:p-0 p-4 md:text-left md:mt-10 mt-4 sm:mb-0 mb-6'>
                            Business consulting consultants provide expert advice and guide businesses to improve their performance and efficiency.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        {completed.map((comp, index) => (
                            <div key={index}
                                 className='bg-[#f4f4f4] space-y-5 border-b-2 border-r-2
                                            border-r-[#ff014f] border-b-[#ff014f] hover:border-t-2 hover:border-l-2 
                                            hover:border-l-[#ff014f] hover:border-t-[#ff014f] hover:border-b-0 hover:border-r-0 
                                             transition-all transform-3d duration-1000 hover:scale-105 hover:ease-in-out
                                            rounded-xl md:px-16 md:py-8 px-6 py-6'>
                                <h1 className='text-center font-extrabold md:text-4xl text-2xl'>{comp.complete}</h1>
                                <h2 className='text-center text-lg text-[rgb(93,101,112)]'>{comp.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='px-12 pb-10'>
                {/* <SkillBars /> */}
            </div>
        </div>
    )
}
