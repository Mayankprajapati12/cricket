import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Team1score = () => {
  const displayScores = useSelector((state) => state.score.scoreData[2]);
  // const [showScores, setshowScores] = useState(0)
  // useEffect(() => {
  //   setshowScores(displayScores)
  // }, [])
  // console.log("scores:", showScores);
  console.log(displayScores);
  if (displayScores !== undefined) {
    const battingData = Object.values(displayScores.batTeamDetails.batsmenData)
    const bowlingData = Object.values(displayScores.bowlTeamDetails.bowlersData)
    return (
      <>
        <div>
          <div className='flex justify-evenly items-center mt-5'>
            <span>{displayScores.batTeamDetails.batTeamShortName}</span>
            <span className='font-medium text-[20px]'>{displayScores.scoreDetails.runs} - {displayScores.scoreDetails.wickets}</span>
            <span>Overs : {displayScores.scoreDetails.overs}</span>
            <span>Run Rate : {displayScores.scoreDetails.runRate}</span>
          </div>
          <div className='lg:flex gap-x-3 px-3'>
            <table className='m-auto w-[95%] text-sm mt-7'>
              <th>{null}</th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>SR</th>
              {
                battingData.map((batsmen) => {
                  return (
                    <>
                      <tr className='border-2 border-black'>
                        <div className='flex flex-col mr-5 ml-2 my-1'>
                          <td className='text-[12px] font-medium'>{batsmen.batName}</td>
                          <td className='text-[10px]'>{batsmen.outDesc}</td>
                        </div>
                        <td className='text-[13px] p-2 text-center'>{batsmen.runs}</td>
                        <td className='text-[13px] p-2 text-center'>{batsmen.balls}</td>
                        <td className='text-[13px] p-2 text-center'>{batsmen.fours}</td>
                        <td className='text-[13px] p-2 text-center'>{batsmen.sixes}</td>
                        <td className='text-[13px] p-2 text-center'>{batsmen.strikeRate}</td>
                      </tr>
                    </>
                  )
                })
              }
            </table><hr />
            <table className='m-auto w-[95%] text-sm mt-7'>
              <th>{null}</th>
              <th>O</th>
              <th>R</th>
              <th>W</th>
              <th>E</th>
              <th>WB</th>
              <th>NB</th>
              {
                bowlingData.map((bowler) => {
                  return (
                    <>
                      <tr className='border-2 border-black'>
                        <div className='ml-2 mt-1.5'>
                          <td className='text-[12px] font-medium'>{bowler.bowlName}</td>
                        </div>
                        <td className='text-[13px] p-2 text-center'>{bowler.overs}</td>
                        <td className='text-[13px] p-2 text-center'>{bowler.runs}</td>
                        <td className='text-[13px] p-2 text-center'>{bowler.wickets}</td>
                        <td className='text-[13px] p-2 text-center'>{bowler.economy}</td>
                        <td className='text-[13px] p-2 text-center'>{bowler.wides}</td>
                        <td className='text-[13px] p-2 text-center'>{bowler.no_balls}</td>
                      </tr>
                    </>
                  )
                })
              }
            </table>
          </div>
        </div >
      </>
    )
  }
  else {
    return <>nodata...</>
  }
}
export default Team1score

// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// const Team1score2 = () => {
//   const displayScores = useSelector((state) => state.score.scoreData[2]);
//   // const [showScores, setshowScores] = useState(0)
//   // useEffect(() => {
//   //   setshowScores(displayScores)
//   // }, [])
//   // console.log("scores:", showScores);
//   if (showScores !== 0) {
//     const battingData = Object.values(displayScores.batTeamDetails.batsmenData)
//     const bowlingData = Object.values(displayScores.bowlTeamDetails.bowlersData)
//     return (
//       <>
//         <div>
//           <div className='flex justify-evenly items-center mt-5'>
//             <span>{displayScores.batTeamDetails.batTeamShortName}</span>
//             <span className='font-medium text-[20px]'>{displayScores.scoreDetails.runs} - {displayScores.scoreDetails.wickets}</span>
//             <span>Overs : {displayScores.scoreDetails.overs}</span>
//             <span>Run Rate : {displayScores.scoreDetails.runRate}</span>
//           </div>
//           <table className='m-auto w-[95%] text-sm mt-3'>
//             <th>{null}</th>
//             <th>R</th>
//             <th>B</th>
//             <th>4s</th>
//             <th>6s</th>
//             <th>SR</th>
//             {
//               battingData.map((batsmen) => {
//                 return (
//                   <>
//                     <tr className='border-2 border-black'>
//                       <div className='flex flex-col mr-5'>
//                         <td className='text-[12px]'>{batsmen.batName}</td>
//                         <td className='text-[10px]'>{batsmen.outDesc}</td>
//                       </div>
//                       <td className='bg-slate-600 text-[13px] p-2'>{batsmen.runs}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{batsmen.balls}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{batsmen.fours}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{batsmen.sixes}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{batsmen.strikeRate}</td>
//                     </tr>
//                   </>
//                 )
//               })
//             }
//           </table><hr />
//           <table className='m-auto w-[95%] text-sm mt-3'>
//             <th>{null}</th>
//             <th>O</th>
//             <th>R</th>
//             <th>W</th>
//             <th>E</th>
//             <th>WB</th>
//             <th>NB</th>
//             {
//               bowlingData.map((bowler) => {
//                 return (
//                   <>
//                     <tr className='border-2 border-black'>
//                       <td className='text-[12px] mr-8'>{bowler.bowlName}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{bowler.overs}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{bowler.runs}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{bowler.wickets}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{bowler.economy}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{bowler.wides}</td>
//                       <td className='bg-slate-600 text-[13px] p-2'>{bowler.no_balls}</td>
//                     </tr>
//                   </>
//                 )
//               })
//             }
//           </table><br />
//         </div >
//       </>
//     )
//   }
//   else {
//     return <>nodata...</>
//   }
// }
// export default Team1score2