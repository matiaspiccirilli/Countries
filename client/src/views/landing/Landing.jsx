import App from "../../App"
import { Link } from "react-router-dom"

function Landing () {
    return (
        <>
        <p>Welcome To Countries App</p>
        <Link to="home">
        <button type="button">INGRESAR</button>
        </Link> 
        </>
    )
}

export default Landing