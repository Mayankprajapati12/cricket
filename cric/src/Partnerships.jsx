import React from 'react'

const Partnerships = ({ pts }) => {
  console.log('pts::', pts);
  let maxPartnerships = pts.reduce((acc, cur) => acc.totalruns > cur.totalruns ? acc : cur)
  console.log('maxPartnerships::', maxPartnerships);
  function percent(cv,total_value) {
    return Math.trunc((cv / total_value) * 100)
  }
  return (
    <div className='border-gray-400 border-2'>
    <span className='flex justify-center bg-gray-300'>Partnerships</span>
      {
        pts ? pts.map((partnership_list, index) => {
          let x
          console.log('per::::',percent(partnership_list.totalruns,maxPartnerships.totalruns))
          return (
            <div key={index} className="border-b border-black py-2 h-10px flex justify-between">
              <div id='firstbatter' className='flex flex-col items-center w-[20%] text-[13px]'>
                <span>{partnership_list.bat1name}</span>
                <span>{partnership_list.bat1runs}</span>
              </div>
              <div id='bar' className='flex flex-col items-center justify-evenly w-[57%]'>
                <div className='text-[13px]'>{partnership_list.totalruns}</div>
                <div style={{width: partnership_list.totalruns === maxPartnerships ? '100%' : partnership_list.totalruns ===0? '20%': `${percent(partnership_list.totalruns,maxPartnerships.totalruns)}%`}} className={`h-6 flex justify-between items-center rounded-md`}>
                  <div id='b1' style={{width: `${percent(partnership_list.bat1runs,partnership_list.totalruns)}%`,backgroundColor:'green',height:'20px'}}></div>
                  <div id='b2' style={{width: `${100-percent(partnership_list.bat1runs,partnership_list.totalruns)}%`,backgroundColor:'skyblue',height:'20px'}}></div>
                </div>
              </div>
              <div id='secondbatter' className='flex flex-col items-center w-[20%] text-[13px]'>
                <span>{partnership_list.bat2name}</span>
                <span>{partnership_list.bat2runs}</span>
              </div>
            </div>
          )
        })
      : <>No pts data</>
      }
    </div>
  )
}

export default Partnerships

// import React, { useMemo } from "react";

// // PartnershipBars.jsx (linear-only version)
// // - Uses linear scaling: barWidth% = total / maxTotal * 100
// // - Removes sqrt/log options and scale selector
// // - Keeps minWidth, clamp for outliers, responsive labels

// export default function Partnership({
//   pts,
//   minWidthPx = 6,
//   clampMaxPercent = 94,
// }) {
//   console.log('partnerPROP::',pts)
//   // Normalize incoming objects to a consistent shape
//   const rows = useMemo(() => {
//     return (pts.map((p, i) => {
//       const bat1name = p.bat1name ?? p.bat1 ?? "Player A";
//       const bat2name = p.bat2name ?? p.bat2 ?? "Player B";
//       const bat1runs = Number(p.bat1runs ?? p.bat1_runs ?? 0) || 0;
//       const bat2runs = Number(p.bat2runs ?? p.bat2_runs ?? 0) || 0;
//       const totalruns = Number(p.totalruns ?? p.total_runs ?? bat1runs + bat2runs) || 0;
//       return {
//         id: p.id ?? i,
//         bat1name,
//         bat2name,
//         bat1runs,
//         bat2runs,
//         totalruns,
//         raw: p,
//       };
//     }));
//   }, [pts]);

//   // Linear scaling: use totals directly
//   const maxTotal = useMemo(() => {
//     return Math.max(...rows.map((r) => r.totalruns), 0);
//   }, [rows]);
//   console.log('maxTotal:::',maxTotal)
//   function widthPct(total) {
//     if (maxTotal <= 0) return 0;
//     return total / maxTotal * 100;
//   }

//   const internalLabelThreshold = 0.08; // 8% inside label threshold

//   function fmt(n) {
//     return n?.toLocaleString?.() ?? String(n);
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold">Partnerships</h3>
//         <div className="text-sm text-gray-600">Scale: linear</div>
//       </div>

//       <div className="flex flex-col gap-4">
//         {rows.map((r) => {
//           const outerWidth = widthPct(r.totalruns);
//           const total = r.totalruns;
//           const leftShare = total > 0 ? r.bat1runs / total : 0.5;
//           const rightShare = total > 0 ? r.bat2runs / total : 0.5;
//           const leftInside = leftShare >= internalLabelThreshold;
//           const rightInside = rightShare >= internalLabelThreshold;

//           const ariaLabel = `${r.bat1name} ${r.bat1runs} and ${r.bat2name} ${r.bat2runs} — total ${total}`;

//           return (
//             <div key={r.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
//               <div className="w-full sm:w-36 text-left sm:text-right pr-2">
//                 <div className="font-medium truncate">{r.bat1name}</div>
//                 <div className="text-sm text-gray-500">{fmt(r.bat1runs)}</div>
//               </div>

//               <div className="flex-1 px-2 bg-green-200">
//                 <div className="relative">
//                   <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
//                     {fmt(total)}
//                   </div>

//                   <div className="h-10 rounded-lg overflow-visible relative" role="img" aria-label={ariaLabel}>
//                     {/* background track */}
//                     <div className="h-full rounded-lg bg-gray-100 flex items-stretch px-1 py-1">
//                       {/* the visual bar container that will take outerWidth% of the available inner space */}
//                       <div
//                         className="h-full rounded-md shadow-sm overflow-hidden flex transition-all duration-500"
//                         style={{ width: `${outerWidth}%`, minWidth: `${minWidthPx}px` }}
//                         title={`${r.bat1name} ${r.bat1runs} — ${r.bat2name} ${r.bat2runs} (Total ${total})`}
//                       >
//                         {/* Left segment */}
//                         <div
//                           className="h-full flex items-center justify-start text-xs font-semibold text-white truncate"
//                           style={{ flexBasis: `${leftShare * 100}%`, background: "linear-gradient(90deg,#1e3a8a,#2563eb)" }}
//                         >
//                           {leftInside ? <div className="px-2">{fmt(r.bat1runs)}</div> : null}
//                         </div>

//                         {/* Right segment */}
//                         <div
//                           className="h-full flex items-center justify-end text-xs font-semibold truncate"
//                           style={{ flexBasis: `${rightShare * 100}%`, background: "linear-gradient(90deg,#93c5fd,#bfdbfe)" }}
//                         >
//                           {rightInside ? <div className="px-2 text-slate-800">{fmt(r.bat2runs)}</div> : null}
//                         </div>
//                       </div>

//                       {/* Outside labels for very small segments */}
//                       <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
//                         {!leftInside ? <div className="text-xs font-medium text-slate-700">{fmt(r.bat1runs)}</div> : null}
//                       </div>
//                       <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-1">
//                         {!rightInside ? <div className="text-xs font-medium text-slate-700">{fmt(r.bat2runs)}</div> : null}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full sm:w-36 text-right pl-2">
//                 <div className="font-medium truncate">{r.bat2name}</div>
//                 <div className="text-sm text-gray-500">{fmt(r.bat2runs)}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-4 text-xs text-gray-500">Linear scale — min width: {minWidthPx}px.</div>
//     </div>
//   );
// }