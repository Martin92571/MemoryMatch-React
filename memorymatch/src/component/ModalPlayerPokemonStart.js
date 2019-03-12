import React from 'react';

const ModalPokemonStart=(props)=>{
    console.log(props.state)
    return(
        <div className="pokemon-row ">
                <div onClick={(e,state)=>props.pokemonClick(e,props.state)}className="pokemon1" data-target="0"></div>
                <div onClick={(e,state)=>props.pokemonClick(e,props.state)}className="pokemon2" data-target="1"></div>
                <div onClick={(e,state)=>props.pokemonClick(e,props.state)}className="pokemon3" data-target="2"></div>
            </div>
    )
}

export default ModalPokemonStart;