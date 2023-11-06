import App from "../../App"
import { Link } from "react-router-dom"
import style from "./Landing.module.css"


function Landing () {
    return (
        <>
        <div className={style.landingcontainer}>
        <p className={style.landingtext}></p>
        <Link to="home">
        <button className={style.landingbutton} type="button">INGRESAR</button>
        </Link>
        </div>
        </>
    )
}

export default Landing