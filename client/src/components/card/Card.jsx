import { Link } from "react-router-dom"
import style from "./Card.module.css"

const Card = (props) => {

    const id = props.id

    return(
        <div className={style.card}>
        <Link to={`/details/${id}`}>
        <img src={props.img} className={style.img}></img>
        </Link>
        <p className={style.name}>{props.name}</p>
        <p>{props.continent}</p>
        </div>
    )
}

export default Card