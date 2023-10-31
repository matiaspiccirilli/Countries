import style from "./Card.module.css"

const Card = (props) => {
    return(
        <div className={style}>
        <p>{props.img}</p>
        <p>{props.name}</p>
        <p>{props.continent}</p>
        </div>
    )
}

export default Card