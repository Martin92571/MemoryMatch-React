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
  }
  render() {
    
    return (
      <div className="App">
         <Modal/>
         <PlayerData/>
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

  return{
    currentPlayer:state.currentPlayer,
    second_card_clicked:state.second_card_clicked,
    first_card_clicked:state.first_card_clicked,
    indexClick:state.indexClick,  
    players:state.players
  }
}

const mapStateToProps=(dispatch)=>{

  return{
     onCardClick:(e,data)=>{
     if(e.children[0].dataset.set!=="flipped" ){
       dispatch({type:actionTypes.CardClick,value:e})}
      },
     cardsMatch:(e)=>dispatch({type:actionTypes.MATCH}),
     cardsNoMatch:(e)=>dispatch({type:actionTypes.NOMATCH})
  }
}


export default connect(mapToProps,mapStateToProps)(App);
