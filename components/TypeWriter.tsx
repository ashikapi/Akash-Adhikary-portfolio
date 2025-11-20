'use client'
import React, { use } from 'react'
import { Typewriter } from 'react-simple-typewriter';
export default function TypeWriter() {
    return (
        <div>
            <h1 className='lg:text-5xl md:text-2xl sm:text-xl lg:text-left md:text-center text-[#ff014f] font-bold animate__animated animate__fadeInUp animate__delay-2s'>
                <Typewriter
                    words={[
                        "MERN Stack Developer .",
                        "React Frontend Developer .",
                        "Web Developer .",
                        "Freelancer .",
                        "Designer .",
                        "C & C++ Programmer .",
                        "Python Learner .",
                        "JavaScript Enthusiast .",
                        "TypeScript Enthusiast .",
                        "SEO Executive .",
                        "Canva Specialist .",
                        "MS Office Expert .",
                        "MySQL & PHP Developer ."
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={30}
                    deleteSpeed={30}
                    delaySpeed={1500}
                />
            </h1>
             <style>{`
                .fixed-cursor {
                    display: inline-block;
                    width: 10px; /* Adjust cursor width */
                    height: 1.5em; /* Ensure cursor height aligns with the text */
                    background-color: #ff014f; /* Set cursor color */
                    vertical-align: middle; /* Align cursor vertically with the text */
                    margin-left: 4px; /* Space between text and cursor */
                    animation: blink 0.75s step-end infinite; /* Blinking effect */
                }

                @keyframes blink {
                    50% {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}
