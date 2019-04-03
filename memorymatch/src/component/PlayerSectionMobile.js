import React from 'react';
import Button from '@material-ui/core/Button';
const MobilePlayerData=(props)=>{
    const peakRow=props.players[props.currentPlayer].playersPeaks.map((peak,index)=>{
        if(props.cardPeak){
            if(peak===null){
                return <div key={index} onClick={(e)=>props.peak(e)} className="Peak showPeak" ></div>
                }else{
                   return  <div key={index} onClick={(e)=>props.peak(e)} className="Peak peakUsed" ></div>
                }
        }else{
             if(peak===null){
             return <div key={index} onClick={(e)=>props.peak(e)} className="Peak " ></div>
             }else{
                return  <div key={index} onClick={(e)=>props.peak(e)} className="Peak peakUsed" ></div>
             }
       }
    })
    return(
        <div className="mobile_BottomGameplay">
                 <div className="accuracyDiv">
                  <span className="currentPlayer">May</span>'s  Accuracy <span className="accuracy">{props.players[props.currentPlayer].accuracy}</span>%
                 </div>
                 <div className="sneakPeak">
                   {peakRow}
                 </div>
                 <div className="buttonReset">
                     <Button onClick={()=>props.reset()} id="btn-resize" variant="contained" color="secondary" className={` reset `}>Reset</Button>
                     <Button onClick={()=>props.soundToggle()}id="btn-resize" variant="contained" color="primary" className={` toggleSound`}>Sound</Button>
                 </div>
             </div>
    )
}

export default MobilePlayerData;