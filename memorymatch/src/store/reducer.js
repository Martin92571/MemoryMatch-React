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
currentPokemonPeakList:null,
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
         let hitPointMatch;
         if(state.first_card_clicked.number===4 && state.first_card_clicked.number ===4 ){
             hitPointMatch=state.players[newPlayer].health - 30
         }else{
             hitPointMatch=state.players[newPlayer].health - 13 
         }
   
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
            ],
            players:[
              ...state.players.map((player,index)=>{
                if(index===newPlayer){
              
                  player.health=hitPointMatch
                }
                return player
              })
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
            
              return {...indexCard,card:null}
            },{})
          ]
      

         }
    case actionTypes.PEAK:
       const currentPlayerCard=state.players[state.currentPlayer].pokemonShuffle.map((cardList,index)=>{
        return {...cardList}
      });
       const changePeak=currentPlayerCard.map((cardList,index)=>{

        return {...cardList, flipped:true}
      })
    
        return{
          ...state,
          currentPokemonPeakList:currentPlayerCard
           ,
          players:[
            ...state.players.map((play,index)=>{
              if(index===state.currentPlayer){
                play.playersPeaks[play.peakCount]="used"; 
                play.peakCount= play.peakCount + 1;
                play.pokemonShuffle=changePeak;
                
              }
              return play
               })
       ]
        }
    case actionTypes.REVERTPEAK:
      return{
        ...state,
        currentPokemonPeakList:null,
        players:[
          ...state.players.map((play,index)=>{
            if(index===state.currentPlayer){
              play.pokemonShuffle=state.currentPokemonPeakList
             
              
            }
            return play
             })
        ]
      }
    default :
     return state;
    }

    

}

export default reducer