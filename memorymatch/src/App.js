import React, { Component } from 'react';
import PlayerData from './PlayerSection';
import {connect} from  'react-redux';
import MemoryCards from './component/MemoryCards';
import Modal from './component/Modal';
import './App.css';

class App extends Component {
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
         playerColor={this.props.playerColor}
         players={this.props.players}
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
    playerColor:state.playerColor,
    players:state.players
  }
}

const mapStateToProps=(dispatch)=>{
  return{

  }
}

export default connect(mapToProps,mapStateToProps)(App);
