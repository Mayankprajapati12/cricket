import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { idGen } from './matchIDslice';
import { useDispatch } from 'react-redux';

const Live = () => {
  const options = {
    method: 'GET',
    // 1399 id
    // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
    headers: {
      'X-RapidAPI-Key': '52148c7b92mshbe7dd9b5e9b25d4p1d51dfjsn8f39a3cea1ad',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  }
  const ryukoptions = {
    method: 'GET',
    // ryuk id
    // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
    headers: {
      'x-rapidapi-key': 'b4672dd53dmshc4ebaba2789b72dp1ea553jsn856fe078e8ff',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  const [res, getRes] = useState(0)
  const [err, setErr] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    async function getRecent() {
      const response = await axios.request(ryukoptions)
      getRes(response)
    }
    getRecent()
      .catch((err) => {
        setErr(err)
      })
  }, [])
  console.log("res:", res);
  console.log("Err:", err);
  if (res !== 0) {
    if (res.data.typeMatches !== undefined) {
      const intMatch = res.data.typeMatches.filter((matchTypes) => matchTypes.matchType === 'International' || matchTypes.matchType === 'League')
      if (intMatch.length !== 0) {
        console.log("intmatch:", intMatch);
        return (
          <>
            <div className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {intMatch.map((matches) => {
                return (
                  matches.seriesMatches.map((innerMatches) => {
                    if (innerMatches.seriesAdWrapper !== undefined) {
                      return (
                        innerMatches.seriesAdWrapper.matches.map((matchList) => {
                          if (matchList.matchInfo.matchFormat === "TEST") {
                            if (matchList.matchScore.team2Score.inngs2 !== undefined) {
                              return (
                                <>
                                  <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                    <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                    <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team1.teamSName}</span><span className='font-medium'>{matchList.matchScore.team1Score.inngs1.runs}-{matchList.matchScore.team1Score.inngs1.wickets} ({matchList.matchScore.team1Score.inngs1.overs}) & {matchList.matchScore.team1Score.inngs2.runs}-{matchList.matchScore.team1Score.inngs2.wickets} ({matchList.matchScore.team1Score.inngs2.overs})</span></div>
                                    {/* 2nd t dtails: */}
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team2.teamSName}</span><span className='font-medium'>{matchList.matchScore.team2Score.inngs1.runs}-{matchList.matchScore.team2Score.inngs1.wickets} ({matchList.matchScore.team2Score.inngs1.overs}) & {matchList.matchScore.team2Score.inngs2.runs}-{matchList.matchScore.team2Score.inngs2.wickets} ({matchList.matchScore.team2Score.inngs2.overs})</span></div>
                                    <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                    <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                  </div>
                                </>
                              )
                            }
                            else if (matchList.matchScore.team1Score.inngs2 !== undefined) {
                              return (
                                <>
                                  <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                    <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                    <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team1.teamSName}</span><span className='font-medium'>{matchList.matchScore.team1Score.inngs1.runs}-{matchList.matchScore.team1Score.inngs1.wickets} ({matchList.matchScore.team1Score.inngs1.overs}) & {matchList.matchScore.team1Score.inngs2.runs}-{matchList.matchScore.team1Score.inngs2.wickets} ({matchList.matchScore.team1Score.inngs2.overs})</span></div>
                                    {/* 2nd team */}
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team2.teamSName}</span><span className='font-medium'>{matchList.matchScore.team2Score.inngs1.runs}-{matchList.matchScore.team2Score.inngs1.wickets} ({matchList.matchScore.team2Score.inngs1.overs})</span>
                                    </div>
                                    <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                    <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                  </div>
                                </>
                              )
                            }
                            else if (matchList.matchScore.team2Score.inngs1 !== undefined) {
                              return (
                                <>
                                  <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                    <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                    <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team1.teamSName}</span><span className='font-medium'>{matchList.matchScore.team1Score.inngs1.runs}-{matchList.matchScore.team1Score.inngs1.wickets} ({matchList.matchScore.team1Score.inngs1.overs}) </span></div>
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team2.teamSName}</span><span className='font-medium'>{matchList.matchScore.team2Score.inngs1.runs}-{matchList.matchScore.team2Score.inngs1.wickets} ({matchList.matchScore.team2Score.inngs1.overs})</span></div>
                                    <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                    <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                  </div>
                                </>
                              )
                            }
                            else if (matchList.matchScore.team1Score !== undefined) {
                              return (
                                <>
                                  <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                    <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                    <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                    <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team1.teamSName}</span><span className='font-medium'>{matchList.matchScore.team1Score.inngs1.runs}-{matchList.matchScore.team1Score.inngs1.wickets} ({matchList.matchScore.team1Score.inngs1.overs})</span></div>
                                    <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                    <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                  </div>
                                </>
                              )
                            }
                          }
                          else if (matchList.matchInfo.matchFormat !== "TEST") {
                            if (matchList.matchScore !== undefined) {
                              if (matchList.matchScore.team2Score !== undefined) {
                                return (
                                  <>
                                    <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                      <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                      <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                      <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team1.teamSName}</span><span className='font-medium'>{matchList.matchScore.team1Score.inngs1.runs}-{matchList.matchScore.team1Score.inngs1.wickets} ({matchList.matchScore.team1Score.inngs1.overs})</span></div>
                                      <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team2.teamSName}</span><span className='font-medium'>{matchList.matchScore.team2Score.inngs1.runs}-{matchList.matchScore.team2Score.inngs1.wickets} ({matchList.matchScore.team2Score.inngs1.overs})</span></div>
                                      <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                      <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                    </div>
                                  </>
                                )
                              }
                              else if (matchList.matchScore.team1Score !== undefined) {
                                return (
                                  <>
                                    <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                      <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                      <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                      <div className='flex justify-between'><span className='font-medium'>{matchList.matchInfo.team1.teamSName}</span><span className='font-medium'>{matchList.matchScore.team1Score.inngs1.runs}-{matchList.matchScore.team1Score.inngs1.wickets} ({matchList.matchScore.team1Score.inngs1.overs})</span></div>
                                      <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                      <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                    </div>
                                  </>
                                )
                              }
                              else {
                                return null
                              }
                            }
                          }
                          else {
                            return (
                              <>
                                <div className='w-[95%] bg-gray-300 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-1'>
                                  <span className='text-gray-800 font-medium text-sm'>{matchList.matchInfo.seriesName}</span>
                                  <span className='text-sm'>{matchList.matchInfo.venueInfo.city}</span>
                                  <span className='font-medium text-red-600'>{matchList.matchInfo.status}</span>
                                  <button className='bg-sky-500 mx-auto px-2 py-1 mt-1 rounded-md text-white cursor-pointer text-sm' onClick={() => { dispatch(idGen(matchList.matchInfo.matchId)) }}><Link to="/scorecard">Show Score</Link></button>
                                </div>
                              </>
                            )
                          }
                        })
                      )
                    }
                    else {
                      return null
                    }
                  })
                )
              }
              )
              }
            </div>
          </>
        )
      }
      else {
        console.log("empty:", intMatch);
        return (
          <>
            no live matches now
          </>
        )
      }
    }
    else {
      return <>no live matches now</>
    }
  }
  else if (err !== 0) {
    return <>error:{err.message}</>
  }
  else {
    return (
      <>
          Processing...
      </>
    )
  }
}
export default Live