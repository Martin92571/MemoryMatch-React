import React from 'react';
import Button from '@material-ui/core/Button';
const ModalGameOver=(props)=>{
    console.log(props)
    const pokemonStyle={
        backgroundSize:"30%"
    }
    const btnStyle={
       width:"40%",
       margin:"0 auto"
    }
    return(
        <div className="modalPlayerTurn">
           <div className="modalPlayerText">{props.players[props.currentPlayer].name} You Win!</div>
           <div style={pokemonStyle} className={`modalPlayerPokemonBox modalPokemon${parseInt(props.players[props.currentPlayer].pokemon)+1}`}></div>
           <Button onClick={()=>props.playagain()} style={btnStyle} id="btn-resize" variant="contained" color="secondary" className={` reset `}>Play Again?</Button>
        </div>
    )
}


export default ModalGameOver