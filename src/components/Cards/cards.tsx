import SingleCard from "../singleCard/singleCard";
import cardCons from "../data/cardConst";
import "./cards.css";
import { useEffect, useState } from "react";

function Cards(props){
    let [cards, setCards]= useState([]);
    let [turns, setTurns]= useState(0);
    let [choiceOne, setChoiceOne]= useState(null);
    let [choiceTwo, setChoiceTwo]= useState(null);
    let [disabled, setDisabled]=useState(false);
    let [counter, setCounter]= useState(0);




    let cardsArray: cardCons[]= require("../data/cardsArray.json");
    let shuffleCards;
    // console.log(cardsArray);

    const handleNewGame=()=>{
        shuffleCards=[...cardsArray, ...cardsArray]
        .sort(()=>(Math.random()-0.5))
        .map((card)=>({matched: false, ...card, card_id: Math.random() }));
        // console.log(shuffleCards);

        setCards(shuffleCards);
        resetTurn();
        setTurns(0)

    }

    const handleChoice=(card)=>{
        // console.log(card);
        choiceOne? setChoiceTwo(card) :setChoiceOne(card) ;
    }

    useEffect(()=>{
        // console.log(cards);

        if(choiceOne && choiceTwo){
            setDisabled(true);

            if(choiceOne.fruit_name===choiceTwo.fruit_name){
                setCounter(prevCounter=> prevCounter+1);
                handleScore();

                setCards(prevCards=>{
                    return prevCards.map(
                        card=> {
                        if(card.fruit_name==choiceOne.fruit_name){
                            card.matched= true;
                            return card
                        } else{
                            return card
                        }}
                    )
                })
                }
                setTimeout(()=>{
                    resetTurn()
                }, 1000)
                }
            
            }
    , [choiceOne, choiceTwo])

    const resetTurn=()=>{
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns=> prevTurns+1)
        setDisabled(false);
    }

    const handleScore=()=>{
        console.log(counter);
        if(counter>=(cards.length/2)-1){
            console.log("win");
            setCounter(0);
            props.updateScore(prevScore=>prevScore+1);

            
        }
    }

    useEffect(()=>{
        handleNewGame()
    }, []);

    return(
        <div className="cards">
            
        <button type="button" className="newBtn" onClick={handleNewGame}>New Game</button>
        <div className="cardsArea">
        {cards.length>0 && cards.map(c=> (
            <SingleCard 
            key={c.card_id} 
            card={c}
            handleChoice={handleChoice}
            flipped={c==choiceOne || c==choiceTwo || c.matched}
            disabled={disabled}
            />)
            )}
            </div>

            <h2 className="headline">Turns: {turns}</h2>
            
        
        </div>
    )
}



export default Cards;


