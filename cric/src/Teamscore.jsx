import Partnerships from "./Partnerships"
const Teamscore = ({ scoreData, darkMode }) => {
  // console.log('score data:', scoreData);
  if (scoreData) {
    return (
      <>
        <div className={darkMode ? 'bg-gray-900 text-white' : ''}>
          <div className={`flex sm:flex-row justify-evenly items-center mt-5 gap-2 sm:gap-4 px-2 text-xs sm:text-sm md:text-base ${darkMode ? 'text-white' : ''}`}>
            <span>{scoreData.batteamname}</span>
            <span className={`font-medium text-base sm:text-lg md:text-[20px] ${darkMode ? 'text-yellow-400' : ''}`}>{scoreData.score} - {scoreData.wickets}</span>
            <span>Overs : {scoreData.overs}</span>
            <span>RR : {scoreData.runrate}</span>
          </div>
          {/* score table div starts from here */}
          <div className={`flex flex-col lg:flex-row justify-center py-5 gap-4 px-2 ${darkMode ? 'bg-gray-900' : ''}`}>
            <div className='w-full lg:w-[55%] mb-3'>
              <div className='overflow-x-auto'>
                <table className={`m-auto w-full text-xs sm:text-sm ${darkMode ? 'bg-gray-800' : ''}`}>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>{null}</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>R</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>B</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>4s</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>6s</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>SR</th>
                  {
                    scoreData.batsman.map((batsmen) => {
                      return (
                        <>
                          <tr className={`border-[1px] ${darkMode ? 'border-gray-700' : 'border-gray-400'}`}>
                            <div className='flex flex-col mr-2 sm:mr-5 ml-1 sm:ml-2 my-1'>
                              <td className={`text-[11px] sm:text-[12px] font-medium ${darkMode ? 'text-white' : ''}`}>{batsmen.name}</td>
                              <td className={`text-[9px] sm:text-[10px] ${darkMode ? 'text-gray-400' : ''}`}>{batsmen.outdec}</td>
                            </div>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{batsmen.runs}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{batsmen.balls}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{batsmen.fours}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{batsmen.sixes}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{batsmen.strkrate}</td>
                          </tr>
                        </>
                      )
                    })
                  }
                </table>
              </div>
              <hr className={darkMode ? 'border-gray-700' : ''} />
              <div className='overflow-x-auto'>
                <table className={`m-auto w-full text-xs sm:text-sm mt-7 ${darkMode ? 'bg-gray-800' : ''}`}>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>{null}</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>O</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>R</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>W</th>
                  <th className={darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}>E</th>
                  {/* <th className='bg-gray-300'></th>
              <th className='bg-gray-300'></th> */}
                  {
                    scoreData.bowler.map((bowler) => {
                      return (
                        <>
                          <tr className={`border-[1px] ${darkMode ? 'border-gray-700' : 'border-gray-400'}`}>
                            <div className='ml-1 sm:ml-2 mt-1.5'>
                              <td className={`text-[11px] sm:text-[12px] font-medium ${darkMode ? 'text-white' : ''}`}>{bowler.name}</td>
                            </div>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{bowler.overs}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{bowler.runs}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{bowler.wickets}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{bowler.economy}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{bowler.wides}</td>
                            <td className={`text-[12px] sm:text-[13px] p-1 sm:p-2 text-center ${darkMode ? 'text-white' : ''}`}>{bowler.no_balls}</td>
                          </tr>
                        </>
                      )
                    })
                  }
                </table>
              </div>
            </div>
            <div className={`w-full lg:w-[40%] rounded-md ${darkMode ? 'bg-gray-800' : ''}`}>
              <Partnerships pts={scoreData.partnership.partnership} darkMode={darkMode}/>
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