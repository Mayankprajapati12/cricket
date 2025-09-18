import { Routes, Route } from 'react-router-dom'
import Live from './Live'
import Home from './Home'
import Recent from './Recent'
import Upcoming from './Upcoming'
import Scorecard from './Scorecard'
const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path='/' element={<Live />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>
        <Route path='/recent' element={<Recent />}></Route>
        <Route path='/scorecard' element={<Scorecard />}></Route>
      </Routes>
    </>
  )
}
export default App