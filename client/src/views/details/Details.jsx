import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        <div>
        <p>{countries?.id}</p>
        <p>{countries?.name}</p>
        <img src={countries?.img}></img>
        <p>{countries?.continent}</p>
        <p>{countries?.capital}</p>
        <p>{countries?.subregion}</p>
        <p>{countries?.area}</p>
        <p>{countries?.population}</p>
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