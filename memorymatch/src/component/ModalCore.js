import React from 'react';
const ModalBody=props=>{
   
    let hide;
    if(props.state==="GameStart"){
        hide="hide"
    }else{
        hide=""
    }
    return(
        <div className={`modal ${hide} ${props.slide}`}>
          {props.playerModal}
        </div>
    )
}

export default ModalBody;