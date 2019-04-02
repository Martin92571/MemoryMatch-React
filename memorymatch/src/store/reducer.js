import * as pokemons from './pokemons';
import * as actionTypes from './actions';
import themeSound from '../theme.mp3'
const theme= new Audio(themeSound);
theme.volume=0.3;
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
hitPoints:null,
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

         let currentPlayer=state.currentPlayer;
         let hitPointMatch;
         if(state.first_card_clicked.number===4 && state.first_card_clicked.number ===4 ){
             hitPointMatch= 30
         }else{
             hitPointMatch= 13 
         }
   
         return{
           ...state,
           hitPoints:hitPointMatch,
           first_card_clicked:null,
           second_card_clicked:null,
           
           players:[
            ...state.players.map((play,index)=>{
              if(index===currentPlayer){
              play.match=play.match + 1  
              play.attempts=play.attempts +1
              play.accuracy=parseFloat(play.match/play.attempts).toFixed(2)*100
              }
              return play
              })
            ],
           indexClick:[
             ...state.indexClick.map(indexCard=>{
               indexCard.card=null
               return indexCard
             },{})
            ],
           
         }
    case actionTypes.NOMATCH:
    
        
         return{
          ...state,
          first_card_clicked:null,
          second_card_clicked:null,
          currentState:"TurnOver",
          
          players:[
            ...state.players.map((play ,index)=>{
              if(index!==state.currentPlayer){
                  return play
               }else{
                  play.attempts=play.attempts + 1
                  play.accuracy=parseFloat(play.match/play.attempts).toFixed(2)*100
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
    case actionTypes.HITPOINTS:
    newPlayer=1- state.currentPlayer
    let updatesPoints=parseInt(state.hitPoints)-1;
    let opponentHealth=parseInt(state.players[newPlayer].health)-1;
    if(updatesPoints<0 && opponentHealth>0){
      return{
        ...state,
        hitPoints:null,
        currentState:"TurnOver"

      }
    }else if( opponentHealth<=0){
      return{
        ...state,
        hitPoints:null,
        currentState:"GameOver"

      }
    }else{
      return{
        ...state,
        hitPoints:updatesPoints,
        players:[
          ...state.players.map((play,index)=>{
            if(index===newPlayer){
            play.health=opponentHealth
            }
            return play
            })
          ]
        }
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
    case actionTypes.INPUTMODAL:
    
    if(action.value!==""){
        if(action.state==="getPlayer1Name"){
           return{
             ...state,
             currentState:"getPlayer1Pokemon",
             players:[...state.players.map((play,index)=>{
               if(index===state.currentPlayer){
                 play.name=action.value
               }
               return play
             })
             ]
           } 
        }else if(action.state==="getPlayer2Name"){
         return{
           ...state,
           currentState:"getPlayer2Pokemon",
           players:[...state.players.map((play,index)=>{
             if(index===state.currentPlayer){
               play.name=action.value
             }
             return play
           })
           ]
         }
        }
    }else{
      return state
    }
    return state
   

    case actionTypes.PLAYERPOKEMON:

    newPlayer=1- state.currentPlayer;
    let pokemonPicked=action.value.target.dataset.target
     if(action.state==="getPlayer1Pokemon"){
        return{
          ...state,
          currentState:"getPlayer2Name",
          currentPlayer:newPlayer,
          players:[...state.players.map((play,index)=>{
            if(index===state.currentPlayer){
              play.pokemon=pokemonPicked
            }
            return play
          })
          ]
        } 
     }else if(action.state==="getPlayer2Pokemon"){
      return{
        ...state,
        currentState:"GameStart",
        currentPlayer:newPlayer,
        players:[...state.players.map((play,index)=>{
          if(index===state.currentPlayer){
            play.pokemon=pokemonPicked
          }
          return play
        })
        ]
      }
     }
     return state;

    case actionTypes.TURNOVER:
    newPlayer=1- state.currentPlayer;
    return{
      ...state,
      currentPlayer:newPlayer,
      currentState:"GameStart",
    

    }
    case actionTypes.SOUNDTOGGLE:
    
    const toggle=!state.soundToggle;
    
    if(toggle){
     theme.play();
    }else{
      theme.pause();
    }
    return {
      ...state,
      soundToggle:toggle
    }

    case actionTypes.PLAYAGAIN:

    let currentWinner=state.currentPlayer;
    let gamesPlayed=state.gamesPlayed+1;
    return {
      ...state,
      Players:[
        ...state.players.map((play,index)=>{
          if(currentWinner===index){
            play.gamesWon=play.gamesWon+1
          }
          play.accuracy=0
          play.attempts=0
          play.health=100
          play.peakCount=0
          play.playersPeaks=[null,null,null]
          play.pokemonShuffle=shufflePokemon(JSON.parse(JSON.stringify(pokemons.pokemons)))

          return play
        })
        
        
      ],
      currentState:"GameStart",
      currentPlayer:0,
      first_card_clicked:null,
      second_card_clicked:null,
      gamesPlayed:gamesPlayed,
      hitPoints:null,
      indexClick:[
        ...state.indexClick.map(indexCard=>{
          indexCard.card=null
          return indexCard
        },{})
       ]

    }
    
    case actionTypes.RESET:
    
    let gamesAmount=state.gamesPlayed+1;
    return {
      ...state,
      Players:[
        ...state.players.map((play,index)=>{
          play.accuracy=0
          play.attempts=0
          play.health=100
          play.peakCount=0
          play.playersPeaks=[null,null,null]
          play.pokemonShuffle=shufflePokemon(JSON.parse(JSON.stringify(pokemons.pokemons)))

          return play
        })
        
        
      ],
      currentState:"GameStart",
      currentPlayer:0,
      first_card_clicked:null,
      second_card_clicked:null,
      gamesPlayed:gamesAmount,
      hitPoints:null,
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