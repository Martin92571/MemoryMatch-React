import React from 'react';
const ModalBody=props=>{
    
    let hide;
    if(props.state==="GameStart"){
        hide="hide"
    }
    return(
        <div className={`modal ${hide}`}>
          {props.playerModal}
        </div>
    )
}

export default ModalBody;