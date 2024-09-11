import { useSelector } from 'react-redux'
const Team1score = () => {
  const displayScores = useSelector((state) => state.score.scoreData[1]);
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
          <div className='lg:flex gap-x-3 px-3 mb-3'>
            <table className='m-auto w-[95%] text-sm mt-7'>
              <th className='bg-gray-300'>{null}</th>
              <th className='bg-gray-300'>R</th>
              <th className='bg-gray-300'>B</th>
              <th className='bg-gray-300'>4s</th>
              <th className='bg-gray-300'>6s</th>
              <th className='bg-gray-300'>SR</th>
              {
                battingData.map((batsmen) => {
                  return (
                    <>
                      <tr className='border-[1px] border-gray-400'>
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
              <th className='bg-gray-300'>{null}</th>
              <th className='bg-gray-300'>O</th>
              <th className='bg-gray-300'>R</th>
              <th className='bg-gray-300'>W</th>
              <th className='bg-gray-300'>E</th>
              <th className='bg-gray-300'>WB</th>
              <th className='bg-gray-300'>NB</th>
              {
                bowlingData.map((bowler) => {
                  return (
                    <>
                      <tr className='border-[1px] border-gray-400'>
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