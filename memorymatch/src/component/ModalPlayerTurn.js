import React from 'react';

const ModalPlayerTurn=(props)=>{
    
    return(
        <div className="modalPlayerTurn">
         <div className="modalPlayerText">{props.players[props.currentPlayer].name}'s Turn</div>
         <div className={`modalPlayerPokemonBox modalPokemon${parseInt(props.players[1- props.currentPlayer].pokemon)+1}`}></div>
        </div>
    )
}

export default ModalPlayerTurn;