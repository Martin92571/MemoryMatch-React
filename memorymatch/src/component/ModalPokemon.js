import React from 'react';

const ModalPokemon=(props)=>{
   
    let firstPlayerTrue;
    if(props.firstplayer){
      firstPlayerTrue="firstPlayerPokemon";
    }else{
     firstPlayerTrue="";
    }

    return(
        <div onClick={(e,state)=>props.pokemonClick(e,props.state)}className={`pkml pokemon${props.pokemonNumber} ${firstPlayerTrue}`} data-target={`${props.pokemonNumber-1}`}></div>
    )
}


export default ModalPokemon;