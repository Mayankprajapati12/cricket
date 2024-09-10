import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { matchScores } from './matchIDslice'
const Scorecard = () => {
  const mId = useSelector((state) => state.id)
  console.log("mid:", mId);
  const options = {
    method: 'GET',
    // 1399 id
    // url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${mId}/hscard`,
    headers: {
      'x-rapidapi-key': '52148c7b92mshbe7dd9b5e9b25d4p1d51dfjsn8f39a3cea1ad',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
    }
  }
  const ryukoptions = {
    method: 'GET',
    // ryuk id
    // url: `https://cricbuzz-cricketl.p.rapidapi.com/mcenter/v1/${mId.id}/hscard`,
    headers: {
      'x-rapidapi-key': 'b4672dd53dmshc4ebaba2789b72dp1ea553jsn856fe078e8ff',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  const [scoreRes, setScoreRes] = useState(0)
  const [err, setScoreErr] = useState(0)
  const [IMG, setImg] = useState(0)
  const [link, setLink] = useState('first')
  function activeLink(links) {
    setLink(links)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    async function scoreData() {
      const res = await axios.request(ryukoptions)
      setScoreRes(res)
    }
    scoreData()
      .catch((e) => {
        setScoreErr(e)
      })
  }, [])
  console.log("res:", scoreRes);
  console.log("err:", err);
  if (scoreRes !== 0) {
    if (scoreRes.data.scoreCard !== undefined) {
      if (scoreRes.data.scoreCard.length > 2) {
        return (
          <>
            <div className='m-2 flex flex-col items-center gap-y-2'>
              <span>{scoreRes.data.matchHeader.seriesName}</span>
              <span>{scoreRes.data.matchHeader.matchDescription}</span>
              <div className='flex justify-between items-center p-1 gap-x-9 lg:hidden'><div className='h-12'></div><span>{scoreRes.data.matchHeader.team1.shortName}</span><span>{scoreRes.data.matchHeader.team2.shortName}</span><div className='h-12'></div></div>
              <div className='hidden lg:flex w-11/12 justify-around items-center p-1 gap-x-9'><div className='h-12 w-12'></div><span className='text-xl'>{scoreRes.data.matchHeader.team1.name}</span><span className='text-xl'>{scoreRes.data.matchHeader.team2.name}</span><div className='h-12 w-12'></div></div>
              <span className='lg:text-xl'>{scoreRes.data.status}</span>
              <div className='flex flex-wrap lg:gap-x-3 mt-4'>
                <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "first" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scoreCard)) }}><Link to="/scorecard/team1" onClick={() => { activeLink('first') }}>{scoreRes.data.matchHeader.team1.shortName} 1st Inn</Link></button>
                <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scoreCard)) }}><Link to="/scorecard/team2" onClick={() => { activeLink('second') }}>{scoreRes.data.matchHeader.team2.shortName} 1st Inn</Link></button>
                <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scoreCard)) }}><Link to="/scorecard/team1sec" onClick={() => { activeLink('third') }}>{scoreRes.data.matchHeader.team1.shortName} 2nd Inn</Link></button>
                <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scoreCard)) }}><Link to="/scorecard/team2sec" onClick={() => { activeLink('fourth') }}>{scoreRes.data.matchHeader.team2.shortName} 2nd Inn</Link></button>
              </div>
            </div>
            <Outlet />
          </>
        )
      }
      else {
        return (
          <>
            <div className='m-2 flex flex-col items-center gap-y-2'>
              <span>{scoreRes.data.matchHeader.seriesName}</span>
              <span>{scoreRes.data.matchHeader.matchDescription}</span>
              <div className='flex justify-between items-center p-1 gap-x-9 lg:hidden'><div className='h-12 w-12'></div><span>{scoreRes.data.matchHeader.team1.shortName}</span><span>{scoreRes.data.matchHeader.team2.shortName}</span><div className='h-12 w-12'></div></div>
              <div className='hidden lg:flex w-11/12 justify-around items-center p-1 gap-x-9'><div className='h-12 w-12'></div><span className='text-xl'>{scoreRes.data.matchHeader.team1.name}</span><span className='text-xl'>{scoreRes.data.matchHeader.team2.name}</span><div className='h-12 w-12'></div></div>
              <span className='lg:text-xl'>{scoreRes.data.status}</span>
              <div className='flex flex-wrap lg:gap-x-3 mt-4'>
                <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scoreCard)) }}><Link to="/scorecard/team1" onClick={() => { activeLink('first') }}>{scoreRes.data.matchHeader.team1.shortName}</Link></button>
                <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scoreCard)) }}><Link to="/scorecard/team2" onClick={() => { activeLink('second') }}>{scoreRes.data.matchHeader.team2.shortName}</Link></button>
              </div>
            </div>
            <Outlet />
          </>
        )
      }
    }
    else {
      return <>asda</>
    }
  }
  else if (err !== 0) {
    return <>error:{err.message}</>
  }
  else {
    return (
      <>
        <div class="w-12 h-12 border-t-red-500 border-r-red-500 border-b-transparent border-l-red-500 border-[5px] rounded-full animate-spin absolute top-1/2 left-1/2"></div>
      </>
    )
  }
}
export default Scorecard