import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Home = () => {
  const [menu, setMenu] = useState(false)
  const par=useRef(null)
  function menuBar() {
    setMenu(!menu)
  }
  console.log(menu);
  return (
    <>
      <div className='relative'>
        <nav className='h-[50px] w-full bg-sky-500 flex justify-between items-center'>
          <div className='h-6 w-10 bg-purple-700 ml-3'>
            logo
          </div>
          <ul className='hidden sm:flex gap-x-2 mr-3'>
            <li className='mx-2 text-lg hover:text-white'><Link to="/">Live Matches</Link></li>
            <li className='mx-2 text-lg hover:text-white'><Link to="/recent">Recent Matches</Link></li>
            <li className='mx-2 text-lg hover:text-white'><Link to="/upcoming">Upcoming Matches</Link></li>
          </ul>
          <div className={`${menu ? 'animate-menu fill-forwards z-10': 'animate-closeMenu fill-forwards'} h-9 w-12 absolute z-10 right-0 flex flex-col justify-center items-center gap-y-1 mr-3 sm:hidden`}onClick={menuBar}>
            <div className={`h-[3px] w-8 bg-black ${menu ? "animate-upline fill-forwards origin-custom": 'animate-none'}`}></div>
            <div className={`h-[3px] w-8 ${menu ? 'bg-transparent': ' bg-black'}`}></div>
            <div className={`h-[3px] w-8  bg-black ${menu ? "animate-lowline fill-forwards origin-custom": 'animate-none'}`}></div>
          </div>
        </nav>
        <div className={`fixed top-0 left-0 h-full bg-green-400 transform ${menu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <ul className='flex flex-col my-28 gap-2'>
            <li className='mx-2 h-12 w-52 flex flex-col justify-center hover:bg-red-500 py-5 text-center' onClick={menuBar}><Link to="/">Live Matches</Link></li>
            <li className='mx-2 h-12 w-52 flex flex-col justify-center hover:bg-red-500 py-5 text-center' onClick={menuBar}><Link to="/recent">Recent Matches</Link></li>
            <li className='mx-2 h-12 w-52 flex flex-col justify-center hover:bg-red-500 py-5 text-center' onClick={menuBar}><Link to="/upcoming">Upcoming Matches</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Home