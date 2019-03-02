import React from 'react';
const ModalPlayerInput=(props)=>{
    return([
        <div className="playerinput">
        <div className="inputItems">
            <input className="input-field" type="text"/>
             <div className="input-button"></div>
        </div>
        </div>,
    <div className="direction animated10s  fadeInUp infinite">Click Pokeball to continue...</div>
    ]
    )
}

export default ModalPlayerInput;