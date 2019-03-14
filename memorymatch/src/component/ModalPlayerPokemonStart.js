import React from 'react';
import ModalPokemon from './ModalPokemon';
const ModalPokemonStart=(props)=>{
    console.log(props.state)
    let playerOnePokemon;
    let pokemonSelect=[];
    if(props.players[0].pokemon){
        playerOnePokemon=props.players[0].pokemon
        
    } 
    for(let x=0;x<3;x++){
        if(parseInt(playerOnePokemon)===x){
            pokemonSelect.push(<ModalPokemon key={x+"pkmn"} pokemonClick={(e,state)=>props.pokemonClick(e,props.state)} pokemonNumber={x+1} firstplayer={true}/>)  
        }else{
            pokemonSelect.push(<ModalPokemon key={x+"pkmn"} pokemonClick={(e,state)=>props.pokemonClick(e,props.state)} pokemonNumber={x+1} firstplayer={false}/>)
        }
        
        
    }
   
    console.log(pokemonSelect); 
    // pokemonSelect[playerOnePokemon].classList.add("playerOneSelectPokemon");
    return(
            <div className="pokemon-row ">
                {pokemonSelect}
            </div>
    )
}

export default ModalPokemonStart;