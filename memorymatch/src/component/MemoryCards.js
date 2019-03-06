import React from 'react';
import Card from './Card';
const CardBoard=(props)=>{
    
    const CardList=props.players[props.currentPlayer].pokemonShuffle.map((xObject,index)=>{
        
        if(index===props.indexClick[0].card && props.indexClick[1].card==null){
         
            return (
                <Card 
                cardClick={(e)=>props.cardClick(e)} currentCards={true} currentPlayer={props.currentPlayer} key={Math.random()} 
                number={xObject.number} image={xObject.image} flipped={xObject.flipped}/>)
        }
        else if(index===props.indexClick[1].card && props.indexClick[0].card!==null){
            return (
                <Card 
                cardClick={(e)=>props.cardClick(e)} currentCards={true} currentPlayer={props.currentPlayer} key={Math.random()} 
                number={xObject.number} image={xObject.image} flipped={xObject.flipped}/>)
        }    
        else{
        return (
        <Card 
        cardClick={(e)=>props.cardClick(e)} currentCards={false} currentPlayer={props.currentPlayer} key={Math.random()} 
        number={xObject.number} image={xObject.image} flipped={xObject.flipped}/>)
    }})

    return(
        <div className="gameArea ">
          {CardList}
        </div>
    )
}

export default CardBoard