import { Routes, Route } from 'react-router-dom'
import Live from './Live'
import Home from './Home'
import Recent from './Recent'
import Upcoming from './Upcoming'
import Scorecard from './Scorecard'
import { useState } from 'react'
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Live darkMode={darkMode} />}></Route>
        <Route path='/upcoming' element={<Upcoming darkMode={darkMode} />}></Route>
        <Route path='/recent' element={<Recent darkMode={darkMode} />}></Route>
        <Route path='/scorecard' element={<Scorecard darkMode={darkMode} />}></Route>
      </Routes>
    </div>
  )
}
export default App