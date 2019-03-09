import React, { Component } from 'react';
import PlayerData from './PlayerSection';
import {connect} from  'react-redux';
import MemoryCards from './component/MemoryCards';
import Modal from './component/Modal';
import * as actionTypes from './store/actions';
import './App.css';
import './animated.css'

class App extends Component {
  componentDidUpdate(){
    if(this.props.first_card_clicked!=null && this.props.second_card_clicked!=null){
      if(this.props.first_card_clicked.number===this.props.second_card_clicked.number){
        setTimeout(()=>{ this.props.cardsMatch()},1000)
         
      }else{
        setTimeout(()=>{ this.props.cardsNoMatch()},1000)
       
      
      }
    }
   if(this.props.currentPokemonPeakList!==null){
  
       setTimeout(()=>{this.props.flipPeak()},2000)
   }
  }
  render() {
    
    return (
      <div className="App">
         <Modal/>
         <PlayerData
         cardPeak={this.props.currentPokemonPeakList} 
         currentPlayer={this.props.currentPlayer}
         peak={(e)=>this.props.sneakPeak(e)} 
         players={this.props.players} 
         />
         <MemoryCards
         currentPlayer={this.props.currentPlayer}
         first_card_clicked={this.props.first_card_clicked}
         second_card_clicked={this.props.second_card_clicked}
         indexClick={this.props.indexClick}
         players={this.props.players}
         cardClick={(e)=>this.props.onCardClick(e)}
         />
      </div>
    );
  }
  
 
}

const mapToProps=(state)=>{
   console.log(state);
  return{
    currentPlayer:state.currentPlayer,
    second_card_clicked:state.second_card_clicked,
    first_card_clicked:state.first_card_clicked,
    indexClick:state.indexClick,  
    players:state.players,
    currentPokemonPeakList:state.currentPokemonPeakList
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
     flipPeak:(e)=>dispatch({type:actionTypes.REVERTPEAK})
  }
}


export default connect(mapToProps,mapStateToProps)(App);
