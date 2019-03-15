import React from 'react';
import * as pokemons from '../store/pokemons';
const Card =(props)=>{
 
    let CardCheck;
    if(props.peak){
           CardCheck=<div data-set={"flipped"} className={`frontCardImg ${props.image}  animateds flipInY`}></div>
    }else{
         if(props.flipped && props.currentCards){
            CardCheck=<div data-set={"flipped"} className={`frontCardImg ${props.image}  animateds flipInY`}></div>
         }else if(props.flipped && !props.currentCards){
             CardCheck=<div data-set={"flipped"} className={`frontCardImg ${props.image}`}></div>
         }else{
             CardCheck=<div className={`backCardImg`}></div>
         }
    }
    return(
        <div onClick={(e)=>{props.cardClick(e.currentTarget)}} className={`cards pickCard ${pokemons.playerColor[props.currentPlayer]}`}>
           {CardCheck}
        </div>
    )
}


export default Card;