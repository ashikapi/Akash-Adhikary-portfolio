import React from 'react'
import Navbar from './navbar/page'
import Home from './home/page'
import Skills from './skill/page'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <div className='mt-10'><Home  /></div>
      <Skills />
      <Footer />
    </div>
  )
}
