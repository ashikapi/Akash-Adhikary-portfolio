import React from 'react'

export default function SendMessage() {
  return (
    <div className="w-full bg-white px-20 py-14">
      <div className="w-full bg-[#f4f4f4] p-20 flex justify-between items-start gap-20 rounded-xl border">

        {/* Left Content */}
        <div className="w-1/3 space-y-4">
          <h1 className="text-lg font-semibold text-[#ff014f]">GET IN TOUCH</h1>
          <h2 className="text-5xl font-bold text-black">Elevate your <p className='pt-4'>brand with Me</p></h2>
          <p className="text-gray-600 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-2/3 space-y-5">

          {/* Row 1 */}
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none w-full px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000 focus:border-[#ff014f] rounded-xl bg-white"
            />
            <input
              type="number"
              placeholder="Your Phone"
              className="outline-none w-full px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000  focus:border-[#ff014f] rounded-xl bg-white"
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-5">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none w-full px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000  focus:border-[#ff014f] rounded-xl bg-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="outline-none w-full px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000  focus:border-[#ff014f] rounded-xl bg-white"
            />
          </div>

          {/* Row 3 */}
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full h-28 px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000  focus:border-[#ff014f] rounded-xl outline-none bg-white"
            ></textarea>
          </div>

          {/* Button */}
          <button className="mt-2 w-full h-14 bg-[#ff014f] text-white font-bold rounded-xl hover:bg-[#e60046] transition-all">
            Appointment Now
          </button>

        </div>

      </div>
    </div>
  )
}
