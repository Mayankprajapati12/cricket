import axios from 'axios';
import { useEffect, useState } from 'react'
const Upcoming = () => {
  const { VITE_apihost, VITE_oldIDkey, VITE_ryukIDkey } = import.meta.env;
  const options = {
    method: 'GET',
    // 1399 id
    // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
    headers: {
      'X-RapidAPI-Key': VITE_oldIDkey,
      'X-RapidAPI-Host': VITE_apihost
    }
  }
  const ryukoptions = {
    method: 'GET',
    // ryuk id
    url: '/.netlify/functions/fetchData?endpoint=upcoming',
    headers: {
      'x-rapidapi-key': VITE_ryukIDkey,
      'x-rapidapi-host': VITE_apihost
    }
  };
  const [res, getRes] = useState(0)
  const [err, setErr] = useState(0)
  // const dispatch = useDispatch()
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
    if (res.data.typeMatches) {
      const intMatch = res.data.typeMatches.filter((matchTypes) => matchTypes.matchType === 'International' || matchTypes.matchType === 'League')
      if (intMatch) {
        // console.log('int matcghes:', intMatch);
        return (
          <>
            <div className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
              {intMatch.map((matches) =>
                matches.seriesMatches.map((series) =>
                  series.seriesAdWrapper ? series.seriesAdWrapper.matches.map((matchList) => (
                    <div className='w-[95%] bg-gray-200 m-auto px-3 py-3 text-base flex flex-col my-3 rounded-sm gap-y-[1px]'>
                      <span className='text-gray-800 font-medium text-[13px]'>{matchList.matchInfo.seriesName.substring(0, 39) + "..."}</span>
                      <span className='text-[13px]'>{matchList.matchInfo.venueInfo.city}</span>
                      <div className='h-7 w-[90%] flex justify-around font-semibold text-lg'>
                        <span>{matchList.matchInfo.team1.teamSName}</span><span>Vs</span><span>{matchList.matchInfo.team2.teamSName}</span>
                      </div>
                      <span className='font-medium text-red-600 text-[15px]'>{matchList.matchInfo.status}</span>
                    </div>
                  )) : null
                )
              )}
            </div>
          </>
        )
      }
    }
    //& {teamScore.team1Score.inngs2.runs}-{teamScore.team1Score.inngs2.wickets} ({teamScore.team1Score.inngs2.overs})
    else {
      return <> <h1>no live matches now</h1></>
    }
  }
  else if (err !== 0) {
    return <> <h1>{err.message}</h1></>
  }
  else {
    return <> <div className="w-12 h-12 border-t-red-500 border-r-red-500 border-b-transparent border-l-red-500 border-[5px] rounded-full animate-spin absolute top-1/2 left-1/2"></div></>
  }
}
export default Upcoming


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Upcoming = () => {
//   const options = {
//     method: 'GET',
//     // 1399 id
//     // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
//     headers: {
//       'X-RapidAPI-Key': '52148c7b92mshbe7dd9b5e9b25d4p1d51dfjsn8f39a3cea1ad',
//       'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
//   };
//   const ryukoptions = {
//     method: 'GET',
//     // ryuk id
//     // url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
//     headers: {
//       'X-RapidAPI-Key': 'b4672dd53dmshc4ebaba2789b72dp1ea553jsn856fe078e8ff',
//       'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
//   };
//   const [res, getRes] = useState(0)
//   const [err, getErr] = useState(0)
//   useEffect(() => {
//     async function Upcoming() {
//       const liveResponse = await axios.request(ryukoptions)
//       getRes(liveResponse)
//     }
//     Upcoming()
//       .catch((err) => {
//         getErr(err)
//       })
//   }, [])
//   console.log("res:", res);
//   console.log("geterr:", err);
//   if (res !== 0) {
//     if (res.data.typeMatches !== undefined) {
//       const intMatch = res.data.typeMatches.filter((matchTypes) => matchTypes.matchType === 'International' || 'League')
//       if (intMatch.length !== 0) {
//         console.log("intmatch:", intMatch);
//         return (
//           <>
//           <div className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
//           {intMatch.map((matches) => {
//             return (
//               matches.seriesMatches.map((innerMatches) => {
//                 if (innerMatches.seriesAdWrapper !== undefined) {
//                   return (
//                     innerMatches.seriesAdWrapper.matches.map((matchList) => {
//                       return (
//                         <>
//                         <div className='bg-gray-200 w-[95%] m-auto mt-3 py-2 px-2 flex flex-col items-center'>
//                           <div className='flex flex-col py-2 '>
//                           <span>{matchList.matchInfo.seriesName}</span>
//                           <span className='text-center'>{matchList.matchInfo.matchDesc} ,
//                           {matchList.matchInfo.venueInfo.city}</span>
//                           </div>
//                           <div className='h-7 w-[90%] flex justify-around font-semibold text-lg'>
//                           <span>{matchList.matchInfo.team1.teamSName}</span><span>Vs</span><span>{matchList.matchInfo.team2.teamSName}</span>
//                           </div>
//                           <span className='text-red-600 font-semibold text-lg'>{matchList.matchInfo.status}</span><hr />
//                         </div>
//                         </>
//                       )
//                     })
//                   )
//                 }
//                 else {
//                   return null
//                 }
//               })
//             )
//           })}
//           </div>
//         </>)
//       }
//       else {
//         console.log("empty:", intMatch);
//       }
//     }
//     else {
//       return <>no matchws to Show w</>
//     }
//   }
//   else if (err !== 0) {
//     return <>error:{err.message}</>
//   }
//   else {
//     return(
//       <>
//       <div class="w-12 h-12 border-t-red-500 border-r-red-500 border-b-transparent border-l-red-500 border-[5px] rounded-full animate-spin absolute top-1/2 left-1/2"></div>
//       </>
//     )
//   }
// }
// export default Upcoming