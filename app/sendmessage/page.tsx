import React from 'react';

export default function SendMessage() {
  return (
    <div className="w-full bg-white md:px-20 px-6 py-6">
      <div className="w-full bg-[#f4f4f4] p-6 md:p-20 md:flex justify-between items-start gap-10 md:gap-20 rounded-xl border-b-2 border-r-2 border-[#ff014f] hover:border-t-2 hover:border-l-2 hover:border-b-0 hover:border-r-0 transition-all transform-3d duration-500 hover:ease-in-out">
        {/* Left Content */}
        <div className="md:w-1/3 space-y-4">
          <h1 className="text-lg font-semibold text-[#ff014f]">GET IN TOUCH</h1>
          <h2 className="md:text-5xl text-2xl font-bold text-black">Elevate your <p className="md:pt-4 pt-1">brand with Me</p></h2>
          <p className="text-gray-600 leading-relaxed sm:mb-0 mb-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        {/* Right Form */}
        <div className="w-full md:w-2/3 space-y-5">
          {/* Row 1 */}
          <div className="md:flex md:gap-5 flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none w-full sm:mb-0 mb-4 px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000 focus:border-[#ff014f] rounded-xl bg-white"
            />
            <input
              type="number"
              placeholder="Your Phone"
              className="outline-none w-full px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000 focus:border-[#ff014f] rounded-xl bg-white"
            />
          </div>
          {/* Row 2 */}
          <div className="md:flex md:gap-5 flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none w-full sm:mb-0 mb-4 px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000 focus:border-[#ff014f] rounded-xl bg-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="outline-none w-full px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000 focus:border-[#ff014f] rounded-xl bg-white"
            />
          </div>
          {/* Row 3 */}
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full h-28 px-5 py-4 border-2 border-gray-300 transition-all transform duration-1000 focus:border-[#ff014f] rounded-xl outline-none bg-white"
            ></textarea>
          </div>
          {/* Button */}
          <button className="mt-4 w-full h-14 bg-[#ff014f] text-white font-bold rounded-xl hover:bg-[#e60046] transition-all">
            Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
}
