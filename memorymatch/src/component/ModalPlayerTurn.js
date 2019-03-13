import React from 'react';

const ModalPlayerTurn=(props)=>{
    console.log(props)
    return(
        <div className="modalPlayerTurn">
         <div class="modalPlayerText">{props.players[props.currentPlayer].name}'s Turn</div><div class={`modalPlayerPokemonBox modalPokemon${props.currentPlayer+1}`}></div>
        </div>
    )
}

export default ModalPlayerTurn;