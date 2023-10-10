import CardMain from "../../images/card.png"
import Cart2 from "../../images/cart2.png"
import "./Card.css"

function Card(){
    return(
        <div className="card">
        <div className="card_main_img">
            <img src={CardMain} alt="phase" />
        </div>
        <div className="card_words">
            <h3>Programming Foundations: Algorithms</h3>
            <div className="bottom_card_words">
                <div>
                    <p>Trainer: Bill Weinman</p>
                    <h2>Ksh. 2,500</h2>
                </div>
                <div>
                    <img src={Cart2} alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Card