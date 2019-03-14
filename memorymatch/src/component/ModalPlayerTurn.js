import React from 'react';

const ModalPlayerTurn=(props)=>{
    console.log(props)
    return(
        <div className="modalPlayerTurn">
         <div class="modalPlayerText">{props.players[props.currentPlayer].name}'s Turn</div><div class={`modalPlayerPokemonBox modalPokemon${parseInt(props.players[props.currentPlayer].pokemon)+1}`}></div>
        </div>
    )
}

export default ModalPlayerTurn;