import React from 'react';
import * as pokemons from '../store/pokemons';
const Card =(props)=>{
    console.log(props);
    let CardCheck;
    if(props.flipped){

    }else{
        
        CardCheck=<div className={`backCardImg`}></div>
    }
    return(
        <div className={`cards pickCard ${pokemons.playerColor[props.currentPlayer]}`}>
           {CardCheck}
        </div>
    )
}


export default Card;