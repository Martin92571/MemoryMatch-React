import React from 'react';

import Button from '@material-ui/core/Button';



const PlayerData=(props)=>{
    console.log(props)
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
    return (
        <div className="LeftGamePly ">
             <div className="NameGame">
                <div className="GameTitle"></div>
                 <div className="stats">
                 <div className="Gameplayed">Game:<span className="gameAmount">1</span></div>
                 <div className="Player1">
                     <div className="player1Name">{props.players[0].name}</div>
                     <div className="health">Health: <span className="health1">{props.players[0].health}</span>%</div>
                     <div className="pokemonAnimation1"><div className="centerPokemonImg battlePokemon1"></div></div>
                     <div>Games Won:<span className="GamesWon1">{props.players[0].gamesWon}</span></div>

                 </div>

                 <div className="Player2">
                     <div className="player2Name">{props.players[1].name}</div>
                     <div className="health">Health: <span className="health2">{props.players[1].health}</span>%</div>
                     <div className="pokemonAnimation2 "><div className="centerPokemonImg battlePokemon2"></div></div>
                     <div>Games Won:<span className="GamesWon2">{props.players[1].gamesWon}</span></div>
                 </div>
             </div>
        
             </div>
             <div className="BottomGameplay">
                 <div className="accuracyDiv">
                  <span className="currentPlayer">May</span>'s  Accuracy <span className="accuracy">0</span>%
                 </div>
                 <div className="sneakPeak">
                   {peakRow}
                 </div>
                 <div className="buttonReset">
                     <Button id="btn-resize" variant="contained" color="secondary" className={` reset `}>Reset</Button>
                     <Button id="btn-resize" variant="contained" color="primary" className={` toggleSound`}>Sound</Button>
                 </div>
             </div>
         </div>
    )
}

export default PlayerData;