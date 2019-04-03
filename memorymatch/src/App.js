import React, { Component } from 'react';
import PlayerData from './component/PlayerSection';
import {connect} from  'react-redux';
import MemoryCards from './component/MemoryCards';
import Modal from './component/Modal';
import MobilePlayerData from './component/PlayerSectionMobile';
import * as actionTypes from './store/actions';
import './App.css';
import './animated.css'

class App extends Component {
  componentWillMount(){
   console.log(this);
   
  }
  componentDidUpdate(){
    if(this.props.first_card_clicked!=null && this.props.second_card_clicked!=null){
      if(this.props.first_card_clicked.number===this.props.second_card_clicked.number){
        setTimeout(()=>{ this.props.cardsMatch()},1500)
         
      }else{
        setTimeout(()=>{ this.props.cardsNoMatch()},1500)
       
      
      }
    }
   if(this.props.hitPoints!==null){
      setTimeout(()=>{this.props.hitPointShow()},70)
   }
   if(this.props.currentPokemonPeakList!==null){
  
       setTimeout(()=>{this.props.flipPeak()},2000)
   }
   if(this.props.modalState==="TurnOver" ){
    setTimeout(()=>{this.props.turnOver()},1200)
   }
  }
  render() {
    
    return (
      <div className="App">
        <Modal
         playAgain={()=>this.props.playAgain()}
         currentPlayer={this.props.currentPlayer}
         currentPlayerState={this.props.modalState}
         inputModal={(e,state)=>this.props.inputModal(e,state)}
         playerPokemon={(e,state)=>this.props.playerPokemon(e,state)}
         players={this.props.players}
         />
          <PlayerData
           reset={()=>this.props.reset()}
           soundToggle={()=>this.props.soundToggle()}
         currentPlayerState={this.props.modalState}
         cardPeak={this.props.currentPokemonPeakList} 
         currentPlayer={this.props.currentPlayer}
         peak={(e)=>this.props.sneakPeak(e)} 
         players={this.props.players}
         gamesPlayed={this.props.gamesPlayed}

         />
         <MemoryCards
         currentPlayerState={this.props.modalState}
         currentPlayer={this.props.currentPlayer}
         first_card_clicked={this.props.first_card_clicked}
         second_card_clicked={this.props.second_card_clicked}
         indexClick={this.props.indexClick}
         players={this.props.players}
         cardClick={(e)=>this.props.onCardClick(e)}
         peak={this.props.currentPokemonPeakList}
         />
        <MobilePlayerData
        reset={()=>this.props.reset()}
        soundToggle={()=>this.props.soundToggle()}
        currentPlayerState={this.props.modalState}
         cardPeak={this.props.currentPokemonPeakList} 
         currentPlayer={this.props.currentPlayer}
         peak={(e)=>this.props.sneakPeak(e)} 
         players={this.props.players}
         gamesPlayed={this.props.gamesPlayed}
        />
        
      </div>
    );
  }
  
 
}

const mapToProps=(state)=>{
   console.log(state);
  return{
    modalState:state.currentState,
    currentPlayer:state.currentPlayer,
    second_card_clicked:state.second_card_clicked,
    first_card_clicked:state.first_card_clicked,
    indexClick:state.indexClick,  
    players:state.players,
    currentPokemonPeakList:state.currentPokemonPeakList,
    hitPoints:state.hitPoints,
    gamesPlayed:state.gamesPlayed,
    
  }
}

const mapStateToProps=(dispatch)=>{

  return{
     onCardClick:(e,data)=>{
     if(e.children[0].dataset.set!=="flipped" ){
       dispatch({type:actionTypes.CardClick,value:e})}
      },
     cardsMatch:(e)=>dispatch({type:actionTypes.MATCH}),
     cardsNoMatch:(e)=>dispatch({type:actionTypes.NOMATCH}),
     sneakPeak:(e)=>dispatch({type:actionTypes.PEAK}),
     flipPeak:(e)=>dispatch({type:actionTypes.REVERTPEAK}),
     inputModal:(e,state)=>dispatch({type:actionTypes.INPUTMODAL,value:e,state:state}),
     playerPokemon:(e,state)=>dispatch({type:actionTypes.PLAYERPOKEMON,value:e,state:state}),
     turnOver:(e)=>dispatch({type:actionTypes.TURNOVER}),
     hitPointShow:(e)=>dispatch({type:actionTypes.HITPOINTS}),
     playAgain:(e)=>dispatch({type:actionTypes.PLAYAGAIN}),
     soundToggle:(e)=>dispatch({type:actionTypes.SOUNDTOGGLE}),
     reset:(e)=>dispatch({type:actionTypes.RESET})
  }
}


export default connect(mapToProps,mapStateToProps)(App);
