import whiteArrow from '../images/whiteArrow.png';
import blackArrow from '../images/blackArrow.png';

function Card(props){

    return (
        <div className={"card" + " " + props.bgColor}>
            <div className="top-content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="card-footer">
                <a href = {props.link}>
                    {(props.bgColor == "yellow") && <img src = {blackArrow}/>}
                    {(props.bgColor == "pink") && <img src = {whiteArrow}/>}
                </a>
            </div>
        </div>
    )
}

export default Card;