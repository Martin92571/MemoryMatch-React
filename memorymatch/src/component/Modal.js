import React from 'react';
import ModalPokemon from './ModalPlayerPokemonStart';
import ModalPlayerInput from './ModalPlayerInput';
import ModalPlayerTurn from './ModalPlayerTurn';
import ModalCore from './ModalCore.js';
const Modal=(props)=>{
  console.log(props);
    let PlayerModal;
    if(props.currentPlayerState==="getPlayer1Name" || props.currentPlayerState==="getPlayer2Name"){
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
      PlayerModal=<div  className="modal-content">
      <div className="modalFlex">
         <div className="nameContainer">
           <div className="modalName"></div>
         </div>
         <div className="modal_text">Player {props.currentPlayer+1} pick your pokemon.</div>
         <ModalPokemon  state={props.currentPlayerState} pokemonClick={(e,state)=>props.playerPokemon(e,state)}/>
         
        </div>
      </div>
    }else{
         PlayerModal=<ModalPlayerTurn currentPlayer={props.currentPlayer} players={props.players}/>
    }
    return(
        
        <ModalCore state={props.currentPlayerState} playerModal={PlayerModal}/>
        

     

    )
}

export default Modal