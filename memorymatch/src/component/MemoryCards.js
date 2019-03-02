import React from 'react';
import Card from './Card';
const CardBoard=(props)=>{
    console.log(props);
    const CardList=props.players[props.currentPlayer].pokemonShuffle.map((xObject)=>{
        return (
        <Card 
        cardClick={(e)=>props.cardClick(e)} currentPlayer={props.currentPlayer} key={Math.random()} 
        number={xObject.number} image={xObject.image} flipped={xObject.flipped}/>)
    })
    return(
        <div className="gameArea ">
          {CardList}
        </div>
    )
}

export default CardBoard