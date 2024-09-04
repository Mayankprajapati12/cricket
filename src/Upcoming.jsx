import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Upcoming = () => {
  const options = {
    method: 'GET',
    // 1399 id
    // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
    headers: {
      'X-RapidAPI-Key': '52148c7b92mshbe7dd9b5e9b25d4p1d51dfjsn8f39a3cea1ad',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  const ryukoptions = {
    method: 'GET',
    // ryuk id
    // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
    headers: {
      'X-RapidAPI-Key': 'b4672dd53dmshc4ebaba2789b72dp1ea553js n856fe078e8ff',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  const [res, getRes] = useState(0)
  const [err, getErr] = useState(0)
  useEffect(() => {
    async function Upcoming() {
      const liveResponse = await axios.request(options)
      getRes(liveResponse)
    }
    Upcoming()
      .catch((err) => {
        getErr(err)
      })
  }, [])
  console.log("res:", res);
  console.log("geterr:", err);
  if (res !== 0) {
    if (res.data.typeMatches !== undefined) {
      const intMatch = res.data.typeMatches.filter((matchTypes) => matchTypes.matchType === 'International' || 'League')
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
                      return (
                        <>
                        <div className='bg-gray-200 w-[95%] m-auto mt-3 py-2 px-2 flex flex-col items-center'>
                          <div className='flex flex-col py-2 '>
                          <span>{matchList.matchInfo.seriesName}</span>
                          <span className='text-center'>{matchList.matchInfo.matchDesc} , 
                          {matchList.matchInfo.venueInfo.city}</span>
                          </div>
                          <div className='h-7 w-[90%] flex justify-around font-semibold text-lg'>
                          <span>{matchList.matchInfo.team1.teamSName}</span><span>Vs</span><span>{matchList.matchInfo.team2.teamSName}</span>
                          </div>
                          <span className='text-red-600 font-semibold text-lg'>{matchList.matchInfo.status}</span><hr />
                        </div>
                        </>
                      )
                    })
                  )
                }
                else {
                  return null
                }
              })
            )
          })}
          </div>
        </>)
      }
      else {
        console.log("empty:", intMatch);
      }
    }
    else {
      return <>no matchws to Show w</>
    }
  }
  else if (err !== 0) {
    return <>error:{err.message}</>
  }
  else {
    return(
      <>
      <div class="w-12 h-12 border-t-red-500 border-r-red-500 border-b-transparent border-l-red-500 border-[5px] rounded-full animate-spin absolute top-1/2 left-1/2"></div>
      </>
    )
  }
}
export default Upcoming