import whiteArrow from '../images/whiteArrow.png';
import blackArrow from '../images/blackArrow.png';

function BlockLink(props){
    return (
        <div className={"block-link " + "card-" + props.bgColor}>
            <h3>{props.title}</h3>
            <a href = {props.link}>
                {(props.bgColor == "yellow") && <img src = {blackArrow}/>}
                {(props.bgColor == "pink") && <img src = {whiteArrow}/>}
            </a>
        </div>
    )
}

export default BlockLink;