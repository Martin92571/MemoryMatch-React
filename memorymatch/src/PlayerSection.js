import React from 'react';

const PlayerData=(props)=>{
    return (
        <div className="LeftGamePly ">
             <div className="NameGame">
                <div className="GameTitle"></div>
                 <div className="stats">
                 <div className="Gameplayed">Game:<span className="gameAmount">1</span></div>
                 <div className="Player1">
                     <div className="player1Name">May</div>
                     <div className="health">Health: <span className="health1">100</span>%</div>
                     <div className="pokemonAnimation1"><div className="centerPokemonImg battlePokemon1"></div></div>
                     <div>Games Won:<span className="GamesWon1">0</span></div>

                 </div>

                 <div className="Player2">
                     <div className="player2Name">uti</div>
                     <div className="health">Health: <span className="health2">100</span>%</div>
                     <div className="pokemonAnimation2 "><div className="centerPokemonImg battlePokemon2"></div></div>
                     <div>Games Won:<span className="GamesWon2">0</span></div>
                 </div>
             </div>
        
             </div>
             <div className="BottomGameplay">
                 <div className="accuracyDiv">
                  <span className="currentPlayer">May</span>'s  Accuracy <span className="accuracy">0</span>%
                 </div>
                 <div className="sneakPeak">
                     <div className="Peak clicked" ></div>
                     <div className="Peak"></div>
                     <div className="Peak"></div>
                 </div>
                 <div className="buttonReset"><button id="btn-resize" className="btn btn-outline-danger btn-lg reset">Reset</button>
                     <button id="btn-resize" className="btn btn-outline-success btn-lg toggleSound">Sound</button>
                 </div>
             </div>
         </div>
    )
}

export default PlayerData;