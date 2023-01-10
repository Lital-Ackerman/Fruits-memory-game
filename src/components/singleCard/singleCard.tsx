import CardCons from "../data/cardConst";
import "./singleCard.css"



function SingleCard(props){

function handleClick(){
    if(!props.disabled){
        props.handleChoice(props.card)
    }
}

    return(
        <div className="cardContainer">
            <div className={props.flipped? "flipped" : "" }>
            <div className="front" style={{backgroundColor: props.card.card_color}}>
            <h4>{props.card.fruit_name}</h4>
            <img className="fruitImg" src= {props.card.fruit_img} alt={props.card.fruit_name}/>
            <hr></hr>
            <p>{props.card.fruit_color}</p>
            </div>

            <img className="back" 
            onClick={handleClick}
            alt={"back"} 
            src="https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg"
            />
        </div>
        </div>
    )
}


export default SingleCard;