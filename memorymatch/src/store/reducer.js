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
indexClick:[
  {card: null},
  {card: null}
],
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
    pokemonShuffle:shufflePokemon(JSON.parse(JSON.stringify(pokemons.pokemons))),
    pokemonPeakList:[]
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
    pokemonShuffle:shufflePokemon(JSON.parse(JSON.stringify(pokemons.pokemons))),
    pokemonPeakList:[]
  }
],
}

const reducer=(state=intialState,action)=>{
    let newPlayer;

    switch(action.type){

    case actionTypes.CardClick:

    if(state.first_card_clicked!==null && state.second_card_clicked!==null){
      return state
    }else{
    const parent=[...action.value.parentElement.childNodes];
    const cardLocation= parent.findIndex(index=>{
      if(index===action.value){
        return index;
      }else{  
        return null
      }
     })
     const first_card_clicked=state.first_card_clicked;
     let cardClicked;
    if(first_card_clicked==null){
      cardClicked=`first_card_clicked`;
    }else{
      cardClicked=`second_card_clicked`;
    }
     const currentPlayer=state.currentPlayer;
     let indexClickFlag=false;
   
     return{ ...state,
               [`${cardClicked}`]:state.players[currentPlayer].pokemonShuffle[cardLocation],
              indexClick:[
                ...state.indexClick.map((indexCard)=>{
                  if(indexCard.card!==null)
                  {
                    return indexCard;
                  }else if(indexClickFlag!==true){
                    indexClickFlag=true;
                    indexCard.card=cardLocation
                    return indexCard
                  }else{
                    return indexCard
                  }
                })
              ],
              
              players:[
                ...state.players.map((play ,index)=>{
                  if(index!==currentPlayer){
                      return play
                   }else{
                      play.pokemonShuffle[cardLocation].flipped=true
                       return play

                       }
                  
                   },{})
                
              ]
            }
     }
     case actionTypes.MATCH:
     
     newPlayer=1- state.currentPlayer;
     return{
       ...state,
       first_card_clicked:null,
       second_card_clicked:null,
       currentPlayer:newPlayer,
       indexClick:[
         ...state.indexClick.map(indexCard=>{
           indexCard.card=null
           return indexCard
         },{})
       ]
     }
     case actionTypes.NOMATCH:
    
     newPlayer=1- state.currentPlayer;
     return{
      ...state,
      first_card_clicked:null,
      second_card_clicked:null,
      currentPlayer:newPlayer,
      players:[
        ...state.players.map((play ,index)=>{
          if(index!==state.currentPlayer){
              return play
           }else{
             
              state.indexClick.map(cardNumber=>{
                play.pokemonShuffle[cardNumber.card].flipped=false
                return null;
              })
               return play

               }
          
           },{})
        
      ],
      indexClick:[
        ...state.indexClick.map(indexCard=>{
          indexCard.card=null
          return indexCard
        },{})
      ]
      

     }
     default :
     return state;
    }

}

export default reducer