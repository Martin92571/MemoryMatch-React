import React from 'react';
const ModalPlayerInput=(props)=>{
    console.log(props.state);
    return([
        <div className="playerinput">
        <div className="inputItems">
             <input id="nameInput" className="input-field" type="text"/>
             <div onClick={(e)=>{
                 const getInput=document.getElementById("nameInput");
                
                 props.inputModal(getInput.value,props.state)
                 getInput.value="";                
                }
                }
                  className="input-button"></div>
        </div>
        </div>,
    <div className="direction animated10s  fadeInUp infinite">Click Pokeball to continue...</div>
    ]
    )
}

export default ModalPlayerInput;