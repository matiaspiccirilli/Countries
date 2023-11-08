import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Details.module.css"
import { Link } from "react-router-dom";


const Details = () => {

    const params = useParams();

    const [countries, setCountries] = React.useState()

    React.useEffect(() => {
        axios(`http://localhost:3001/countries/${params?.id}`)
        .then(({data}) => {
            if (data.name) {
                setCountries(data);
            } else {
                alert("no hay paises con ese ID")
            }
        })
        .catch(()=> {console.log("se rompio!")})

        return setCountries({})
    }, [params?.id])

    return (
        <div className={style.fondo}>

        <div className={style.predatos}></div>

        <div className={style.contenedor}>

        <div className={style.dato}>
        <p className={style.textop}>ID: {countries?.id}</p>
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Nombre: {countries?.name}</p>
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Bandera:</p>
        <img src={countries?.img}></img>
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Continente: {countries?.continente}</p>  
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Capital: {countries?.capital}</p>
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Subregion: {countries?.subregion}</p>
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Area: {countries?.area}</p>
        </div>

        <div className={style.dato}>
        <p className={style.textop}>Población: {countries?.poblacion }</p>
        
        <Link to={"/home"}>
            <button>Volver al Home</button>
        </Link>
        </div>

        </div>
        
        </div>
    )
}

export default Details

/*ID (Código de tres letras).
Nombre.
Imagen de la bandera.
Continente.
Capital.
Subregión (si tiene).
Área (si tiene).
Población.
 */