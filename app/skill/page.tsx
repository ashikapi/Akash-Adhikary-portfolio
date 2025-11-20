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
        <div>
            <div className='grid grid-cols-4 px-20 py-20'>
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
                <div className='flex justify-center items-center gap-20'>
                    <div className='bg-[#f4f4f4] rounded-xl px-32 py-10'>
                        <div className='flex justify-normal items-center space-x-6'>
                            <h1 className='font-extrabold font-sans text-9xl text-[#ff014f]'>{experience}</h1>
                            <h2 className='font-bold text-5xl'>Years Of <br />experience</h2>
                        </div>
                        <p className='w-96 text-left mt-10'>
                            Business consulting consultants provide expert advice and guide businesses to improve their performance and efficiency.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        {completed.map((comp, index) => (
                            <div key={index}
                                 className='bg-[#f4f4f4] space-y-5 border-b-2 border-r-2
                                            border-r-[#ff014f] border-b-[#ff014f] hover:border-t-2 hover:border-l-2 
                                            hover:border-l-[#ff014f] hover:border-t-[#ff014f] hover:border-b-0 hover:border-r-0 
                                             transition-all transform-3d duration-1000 hover:scale-105 hover:ease-in-out
                                            rounded-xl px-16 py-8'>
                                <h1 className='text-center font-extrabold text-4xl'>{comp.complete}</h1>
                                <h2 className='text-center text-lg text-[rgb(93,101,112)]'>{comp.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='px-12 pb-10'>
                <SkillBars />
            </div>
        </div>
    )
}
