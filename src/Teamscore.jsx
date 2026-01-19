import Partnerships from "./Partnerships"
const Teamscore = ({ scoreData }) => {
  // console.log('score data:', scoreData);
  if (scoreData) {
    return (
      <>
        <div>
          <div className='flex flex-col sm:flex-row justify-evenly items-center mt-5 gap-2 sm:gap-4 px-2 text-xs sm:text-sm md:text-base'>
            <span>{scoreData.batteamname}</span>
            <span className='font-medium text-base sm:text-lg md:text-[20px]'>{scoreData.score} - {scoreData.wickets}</span>
            <span>Overs : {scoreData.overs}</span>
            <span>RR : {scoreData.runrate}</span>
          </div>
          {/* score table div starts from here */}
          <div className="flex flex-col lg:flex-row justify-center py-5 gap-4 px-2">
            <div className='w-full lg:w-[55%] mb-3'>
              <div className='overflow-x-auto'>
                <table className='m-auto w-full text-xs sm:text-sm'>
                  <th className='bg-gray-300'>{null}</th>
                  <th className='bg-gray-300'>R</th>
                  <th className='bg-gray-300'>B</th>
                  <th className='bg-gray-300'>4s</th>
                  <th className='bg-gray-300'>6s</th>
                  <th className='bg-gray-300'>SR</th>
                  {
                    scoreData.batsman.map((batsmen) => {
                      return (
                        <>
                          <tr className='border-[1px] border-gray-400'>
                            <div className='flex flex-col mr-2 sm:mr-5 ml-1 sm:ml-2 my-1'>
                              <td className='text-[11px] sm:text-[12px] font-medium'>{batsmen.name}</td>
                              <td className='text-[9px] sm:text-[10px]'>{batsmen.outdec}</td>
                            </div>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{batsmen.runs}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{batsmen.balls}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{batsmen.fours}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{batsmen.sixes}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{batsmen.strkrate}</td>
                          </tr>
                        </>
                      )
                    })
                  }
                </table>
              </div>
              <hr />
              <div className='overflow-x-auto'>
                <table className='m-auto w-full text-xs sm:text-sm mt-7'>
                  <th className='bg-gray-300'>{null}</th>
                  <th className='bg-gray-300'>O</th>
                  <th className='bg-gray-300'>R</th>
                  <th className='bg-gray-300'>W</th>
                  <th className='bg-gray-300'>E</th>
                  {/* <th className='bg-gray-300'></th>
              <th className='bg-gray-300'></th> */}
                  {
                    scoreData.bowler.map((bowler) => {
                      return (
                        <>
                          <tr className='border-[1px] border-gray-400'>
                            <div className='ml-1 sm:ml-2 mt-1.5'>
                              <td className='text-[11px] sm:text-[12px] font-medium'>{bowler.name}</td>
                            </div>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{bowler.overs}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{bowler.runs}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{bowler.wickets}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{bowler.economy}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{bowler.wides}</td>
                            <td className='text-[12px] sm:text-[13px] p-1 sm:p-2 text-center'>{bowler.no_balls}</td>
                          </tr>
                        </>
                      )
                    })
                  }
                </table>
              </div>
            </div>
            <div className="w-full lg:w-[40%] rounded-md">
              <Partnerships pts={scoreData.partnership.partnership}/>
            </div>
          </div>
        </div >
      </>
    )
  }
  else {
    return <>nodata...</>
  }
}

export default Teamscore