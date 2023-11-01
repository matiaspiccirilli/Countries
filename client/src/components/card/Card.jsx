import style from "./Card.module.css"

const Card = (props) => {

    const id = props.id

    const URL = `http://localhost:5173/details/${id}`

    return(
        <div className={style}>
        <a href={URL}>
        <img src={props.img}></img>
        </a>
        <p>{props.name}</p>
        <p>{props.continent}</p>
        </div>
    )
}

export default Card