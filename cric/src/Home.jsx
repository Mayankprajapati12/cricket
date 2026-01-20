import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Home = ({ darkMode, setDarkMode }) => {
  const [menu, setMenu] = useState(false)
  const [link,setLink]=useState('live')
  function activeLink(links){
    setLink(links)
  }
  console.log(link);
  
  function menuBar() {
    setMenu(!menu)
  }
  console.log(menu);
  return (
    <>
      <div className='relative'>
        <nav className={`h-[50px] w-full ${darkMode ? 'bg-blue-900 border-b border-blue-800' : 'bg-sky-500'} flex justify-between items-center transition-colors duration-300`}>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-3 p-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' : 'bg-gray-800 text-yellow-300 hover:bg-gray-700'}`}
            title="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className='flex-1'></div>
          <ul className='hidden sm:flex gap-x-2'>
            <li className={`mx-2 text-lg text-white px-1 rounded-sm ${link=='live' ? 'border-b-4' : 'text-white'}`}><Link to="/" onClick={()=>{activeLink('live')}}>Live Matches</Link></li>
            <li className={`mx-2 text-lg text-white px-1 rounded-sm ${link=='recent' ? 'border-b-4' : 'text-white'}`}><Link to="/recent" onClick={()=>{activeLink('recent')}}>Recent Matches</Link></li>
            <li className={`mx-2 text-lg text-white px-1 rounded-sm ${link=='upcoming' ? 'border-b-4' : 'text-white'}`}><Link to="/upcoming" onClick={()=>{activeLink('live')}}>Upcoming Matches</Link></li>
          </ul>
          <div className='h-6 w-10 bg-transparent mr-3 '>
          </div>
          <div className={`${menu ? 'animate-menu fill-forwards z-10': 'animate-closeMenu fill-forwards'} h-9 w-12 absolute z-10 right-0 flex flex-col justify-center items-center gap-y-1 mr-3 sm:hidden`} onClick={menuBar}>
            <div className={`h-[3px] w-8 ${darkMode ? 'bg-white' : 'bg-black'} ${menu ? "animate-upline fill-forwards origin-custom": 'animate-none'}`}></div>
            <div className={`h-[3px] w-8 ${menu ? 'bg-transparent': darkMode ? ' bg-white': ' bg-black'}`}></div>
            <div className={`h-[3px] w-8 ${darkMode ? 'bg-white' : 'bg-black'} ${menu ? "animate-lowline fill-forwards origin-custom": 'animate-none'}`}></div>
          </div>
        </nav>
        <div className={`fixed top-0 left-0 h-full ${darkMode ? 'bg-gray-950 border-r border-gray-700' : 'bg-green-400'} transform ${menu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <ul className='flex flex-col my-28 gap-2'>
            <li className={`mx-2 h-12 w-52 flex flex-col justify-center hover:border-white py-5 text-center ${darkMode ? 'text-white hover:bg-gray-700' : ''}`} onClick={menuBar}><Link to="/">Live Matches</Link></li>
            <li className={`mx-2 h-12 w-52 flex flex-col justify-center hover:border-white py-5 text-center ${darkMode ? 'text-white hover:bg-gray-700' : ''}`} onClick={menuBar}><Link to="/recent">Recent Matches</Link></li>
            <li className={`mx-2 h-12 w-52 flex flex-col justify-center hover:border-white py-5 text-center ${darkMode ? 'text-white hover:bg-gray-700' : ''}`} onClick={menuBar}><Link to="/upcoming">Upcoming Matches</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Home
