import React from 'react';
import ModalPokemon from './ModalPlayerPokemonStart';
import ModalPlayerInput from './ModalPlayerInput';
import ModalPlayerTurn from './ModalPlayerTurn';
import ModalCore from './ModalCore.js';
import ModalGameOver from './ModalGameOver';
const Modal=(props)=>{
   
    let PlayerModal;
    let SlideDown;
    if(props.currentPlayerState==="getPlayer1Name" || props.currentPlayerState==="getPlayer2Name"){
      SlideDown="";
      PlayerModal=
     
     <div className="modal-content">
                    <div className="modalFlex">
                       <div className="nameContainer">
                         <div className="modalName"></div>
                       </div>
                       <div className="modal_text">Player {props.currentPlayer+1} what is your name?</div>
                       
                       <ModalPlayerInput key={Math.random()} state={props.currentPlayerState} inputModal={(e,state)=>props.inputModal(e,state)}/>
                    </div>
                 </div>
    }else if(props.currentPlayerState==="getPlayer1Pokemon" || props.currentPlayerState==="getPlayer2Pokemon"){
      SlideDown="";
     PlayerModal=<div  className="modal-content">
      <div className="modalFlex">
         <div className="nameContainer">
           <div className="modalName"></div>
         </div>
         <div className="modal_text">{props.players[props.currentPlayer].name.toUpperCase()} pick your pokemon.</div>
         <ModalPokemon players={props.players} state={props.currentPlayerState} pokemonClick={(e,state)=>props.playerPokemon(e,state)}/>
         <div className="direction animated10s  fadeInUp infinite">Select Your Pokemon</div>
         
        </div>
      </div>
    }else if(props.currentPlayerState==="TurnOver"){
         SlideDown="animated slideInDown";
         PlayerModal=<ModalPlayerTurn currentPlayer={props.currentPlayer} players={props.players}/>
    }else{
      SlideDown="animated slideInDown";
      PlayerModal=<ModalGameOver playagain={()=>props.playAgain()} currentPlayer={props.currentPlayer} players={props.players}/>
    }
    return(
        
        <ModalCore slide={SlideDown} state={props.currentPlayerState} playerModal={PlayerModal}/>
        

     

    )
}

export default Modal