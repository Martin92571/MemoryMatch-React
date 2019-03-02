import React from 'react';
import ModalPokemon from './ModalPlayerPokemonStart';
import ModalPlayerInput from './ModalPlayerInput';
import ModalPlayerTurn from './ModalPlayerTurn';
const Modal=(props)=>{
    let PlayerModal;
    if(false){
     PlayerModal=<div className="modal-content">
                    <div className="modalFlex">
                       <div className="nameContainer">
                         <div className="modalName"></div>
                       </div>
                       <div className="modal_text">Player 1 what is your name?</div>
                      <ModalPokemon/>
                       <ModalPlayerInput/>
                    </div>
                 </div>
    }else{
        PlayerModal=<ModalPlayerTurn/>
    }
    return(
        <div  className="modal hide">
         {PlayerModal}

       </div>

    )
}

export default Modal