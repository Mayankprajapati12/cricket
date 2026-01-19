import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Teamscore from './Teamscore'
const Scorecard = () => {
  const mId = useSelector((state) => state.id)
  const { VITE_apihost, VITE_oldIDkey, VITE_ryukIDkey } = import.meta.env;
  // 1399 id
  const options = {
    method: 'GET',
    // url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${mId}/hscard`,
    headers: {
      'x-rapidapi-key': VITE_oldIDkey,
      'x-rapidapi-host': VITE_apihost,
    }
  }
  // console.log(mId)
  const ryukoptions = {
    method: 'GET',
    // ryuk id/
    url: `https://cricbuzz-cricketl.p.rapidapi.com/mcenter/v1/${mId.id}/hscard`,
    headers: {
      'x-rapidapi-key': VITE_ryukIDkey,
      'x-rapidapi-host': VITE_apihost
    }
  };
  const [scoreRes, setScoreRes] = useState(0)
  const [err, setScoreErr] = useState(0)
  const [stateinnings, setInnings] = useState(null)
  const [defaultlink, setDefaultlink] = useState(0)
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
  useEffect(() => {
    if (scoreRes != 0 && scoreRes.data.scorecard) {
      setInnings(scoreRes.data.scorecard[0])
    }
  }, [scoreRes])
  console.log("scoreres:", scoreRes == 0 ? 'loading...' : scoreRes);
  console.log("sccoreerr:", err);
  if (scoreRes !== 0) {
    return (
      <>
        <div className='m-2 flex flex-col items-center gap-y-2'>
          {/* <span>{scoreRes.data.matchHeader.seriesName}</span>
          <span>{scoreRes.data.matchHeader.matchDescription}</span> */}
          <span className='lg:text-xl text-red-500 font-semibold'>{scoreRes.data.status}</span>
        </div>
        <div className='flex flex-wrap lg:gap-x-3 mt-4 justify-center'>
          {scoreRes.data.scorecard ? scoreRes.data.scorecard.map((innings, innings_index) => { return (<div className={`p-2 px-1 m-0.5 text-m border-2 ${innings_index == defaultlink ? 'bg-sky-500 text-white' : 'bg-white-500'} hover:bg-sky-500 hover:text-white`}><button onClick={() => { setInnings(innings); setDefaultlink(innings_index) }}>{innings_index==2? `${innings.batteamsname} 2nd innings` : innings_index==3? `${innings.batteamsname} 2nd innings` : `${innings.batteamsname} innings`}</button></div>) }) : 'no innings data'}
        </div>
        <Teamscore scoreData={stateinnings} />
      </>
    )
  }
  else if (err !== 0) {
    return <>error:{err.message}</>
  }
  else {
    return (
      <>
        <div className="w-12 h-12 border-t-red-500 border-r-red-500 border-b-transparent border-l-red-500 border-[5px] rounded-full animate-spin absolute top-1/2 left-1/2"></div>
      </>
    )
  }
}
export default Scorecard

// const Scorecard = () => {
//   const mId = useSelector((state) => state.id)
//   console.log("mid:", mId);
//   const options = {
//     method: 'GET',
//     // 1399 id
//     // url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${mId}/hscard`,
//     headers: {
//       'x-rapidapi-key': '52148c7b92mshbe7dd9b5e9b25d4p1d51dfjsn8f39a3cea1ad',
//       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
//     }
//   }
//   const ryukoptions = {
//     method: 'GET',
//     // ryuk id
//     url: `https://cricbuzz-cricketl.p.rapidapi.com/mcenter/v1/${mId.id}/hscard`,
//     headers: {
//       'x-rapidapi-key': 'b4672dd53dmshc4ebaba2789b72dp1ea553jsn856fe078e8ff',
//       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
//   };
//   const [scoreRes, setScoreRes] = useState(0)
//   const [err, setScoreErr] = useState(0)
//   const [IMG, setImg] = useState(0)
//   const [link, setLink] = useState(0)
//   const [scoreData, setScoreData] = useState(0)
//   const [inningsindex, setInningsindex] = useState(0)
//   function activeLink(links) {
//     setLink(links)
//   }
//   const dispatch = useDispatch()
//   useEffect(() => {
//     async function scoreData() {
//       const res = await axios.request(ryukoptions)
//       setScoreRes(res)
//     }
//     scoreData()
//       .catch((e) => {
//         setScoreErr(e)
//       })
//   }, [])
//   console.log("res:", scoreRes);
//   console.log("err:", err);
//   if (scoreRes !== 0) {
//     if (scoreRes.data.scorecard) {
//       if (scoreRes.data.scorecard.length > 2) {
//         return (
//           <>
//             <div className='m-2 flex flex-col items-center gap-y-2'>
//               <span>{scoreRes.data.matchHeader.seriesName}</span>
//               <span>{scoreRes.data.matchHeader.matchDescription}</span>
//               <div className='flex justify-between items-center p-1 gap-x-9 lg:hidden'><div className='h-12'></div><span>{scoreRes.data.matchHeader.team1.shortName}</span><span>{scoreRes.data.matchHeader.team2.shortName}</span><div className='h-12'></div></div>
//               <div className='hidden lg:flex w-11/12 justify-around items-center p-1 gap-x-9'><div className='h-12 w-12'></div><span className='text-xl'>{scoreRes.data.matchHeader.team1.name}</span><span className='text-xl'>{scoreRes.data.matchHeader.team2.name}</span><div className='h-12 w-12'></div></div>
//               <span className='lg:text-xl'>{scoreRes.data.status}</span>
//               <div className='flex flex-wrap lg:gap-x-3 mt-4'>
//                 {/* removed link path button team 1 score */}
//                 <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "first" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to="" onClick={() => { activeLink('first') }}>{scoreRes.data.matchHeader.team1.shortName} 1st Inn</Link></button>
//                 <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to="team2" onClick={() => { activeLink('second') }}>{scoreRes.data.matchHeader.team2.shortName} 1st Inn</Link></button>
//                 <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "third" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to="team1sec" onClick={() => { activeLink('third') }}>{scoreRes.data.matchHeader.team1.shortName} 2nd Inn</Link></button>
//                 <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "fourth" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to="team2sec" onClick={() => { activeLink('fourth') }}>{scoreRes.data.matchHeader.team2.shortName} 2nd Inn</Link></button>
//               </div>
//             </div>
//             <Outlet />
//           </>
//         )
//       }
//       else {
//         return (
//           <>
//             <div className='m-2 flex flex-col items-center gap-y-2'>
//               <span>{scoreRes.data.matchHeader.seriesName}</span>
//               <span>{scoreRes.data.matchHeader.matchDescription}</span>
//               <div className='flex justify-between items-center p-1 gap-x-9 lg:hidden'><div className='h-12 w-12'></div><span>{scoreRes.data.matchHeader.team1.shortName}</span><span>{scoreRes.data.matchHeader.team2.shortName}</span><div className='h-12 w-12'></div></div>
//               <div className='hidden lg:flex w-11/12 justify-around items-center p-1 gap-x-9'><div className='h-12 w-12'></div><span className='text-xl'>{scoreRes.data.matchHeader.team1.name}</span><span className='text-xl'>{scoreRes.data.matchHeader.team2.name}</span><div className='h-12 w-12'></div></div>
//               <span className='lg:text-xl'>{scoreRes.data.status}</span>
//               <div className='flex flex-wrap lg:gap-x-3 mt-4'>
//                 {/* removed link path button team 1 score
//                 <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "first" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to="" onClick={() => { activeLink('first') }}>{scoreRes.data.scorecard? scoreRes.data.scorecard[0].batTeamDetails.batTeamShortName:scoreRes.data.matchInfo.team1.teamSName}</Link></button>
//                 <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == "second" ? "bg-sky-500 text-white" : "bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to="team2" onClick={() => { activeLink('second') }}>{scoreRes.data.scorecard[1]? scoreRes.data.scorecard[1].batTeamDetails.batTeamShortName:scoreRes.data.matchInfo.team2.teamSName}</Link></button> */}

//                 {scoreRes.data.scorecard ? scoreRes.data.scorecard.map((innings, innings_index) => {
//                   // return <button className={`h-9 w-24 border rounded-md lg:w-[305px] ${link == innings_index?"bg-sky-500 text-white":"bg-white"}`} onClick={() => { dispatch(matchScores(scoreRes.data.scorecard)) }}><Link to={innings_index==0?"":innings_index==1?"team2":innings_index==2?"team1sec":"team2sec"} onClick={() => { activeLink(innings_index) }}>{innings.batTeamDetails.batTeamShortName}</Link></button>
//                   return <button className={`h-9 w-24 border rounded-md lg:w-[305px]`} onClick={() => { setScoreData(innings); setInningsindex(innings_index) }}>innings {innings_index}</button>
//                 }) : null
//                 }
//               </div>
//               {/* <Teamscore scoreData={} /> */}
//             </div>
//             <Outlet />
//           </>
//         )
//       }
//     }
//     else {
//       return <>asda</>
//     }
//   }
//   else if (err !== 0) {
//     return <>error:{err.message}</>
//   }
//   else {
//     return (
//       <>
//         <div class="w-12 h-12 border-t-red-500 border-r-red-500 border-b-transparent border-l-red-500 border-[5px] rounded-full animate-spin absolute top-1/2 left-1/2"></div>
//       </>
//     )
//   }
// }
// export default Scorecard