import * as pokemons from './pokemons';
import * as actionTypes from './actions';
const shufflePokemon=(array)=>{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array
 }
 
const intialState={
    
currentState:"getPlayer1Name",
currentPlayer: 0,
gamesPlayed:1,
turnCounter:0,
first_card_clicked:null,
second_card_clicked:null,
indexClick:{
  firstClick: null,
  secondClick: null
},
soundToggle:false,
players:[
  {
    pokemon: null,
    name: "",
    health: 100,
    gamesWon: 0,
    playersFirstTurn: true,
    peakCount: 0,
    playersPeaks: [null, null, null],
    accuracy: 0,
    match: 0,
    attempts: 0,
    pokemonShuffle:shufflePokemon(JSON.parse(JSON.stringify(pokemons.pokemons)))
  },
  {
    pokemon: null,
    name: "",
    health: 100,
    gamesWon: 0,
    playersFirstTurn: true,
    peakCount: 0,
    playersPeaks: [null, null, null],
    accuracy: 0,
    match: 0,
    attempts: 0,
    pokemonShuffle:shufflePokemon(JSON.parse(JSON.stringify(pokemons.pokemons)))
  }
],
}

const reducer=(state=intialState,action)=>{
    switch(action.type){
    case actionTypes.CardClick:
    const parent=[...action.value.parentElement.childNodes]
    const cardLocation= parent.findIndex(index=>{
      if(index===action.value){
        return index;
      }else{
        return null
      }
     })
     console.log(cardLocation);
     console.log(state.players[state.currentPlayer].pokemonShuffle[cardLocation].flipped=true)
     const currentPlayer=state.currentPlayer;
     return{ ...state,
              players:{
                ...state.players,
                [`players[${currentPlayer}`]:{
                  ...state.players[state.currentPlayer],
                  pokemonShuffle:{
                    ...state.players[state.currentPlayer].pokemonShuffle,
                    [`pokemonShuffle[${cardLocation}`]:{
                      ...state.players[currentPlayer].pokemonShuffle[cardLocation],
                      flipped:true
                    }
                  }
                }
                
              }
     }
     default :
     return state;
    }

}

export default reducer