import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Live from './Live'
import Home from './Home'
import Recent from './Recent'
import Upcoming from './Upcoming'
import Scorecard from './Scorecard'
import Team1score from './Team1score'
import Team2score from './Team2score'
import Team1score2 from './Team1score2'
import Team2score2 from './Team2score2'
const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path='/' element={<Live />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>
        <Route path='/recent' element={<Recent />}></Route>
        <Route path='/scorecard' element={<Scorecard />}>
          <Route path='team1' element={<Team1score />}></Route>
          <Route path='team2' element={<Team2score />}></Route>
          <Route path='team1sec' element={<Team1score2 />}></Route>
          <Route path='team2sec' element={<Team2score2 />}></Route>
        </Route>
      </Routes>
    </>
  )
}
export default App