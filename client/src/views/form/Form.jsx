import React from "react"
import validation from "./validation"
import style from "./Form.module.css"
import axios from "axios"

function Form ({login}) {

    const [activityData, setActivityData] = React.useState({
        name:"",
        dificultad:"",
        duracion: "",
        temporada: "",
        countries: ""
    })

    const [error, setError] = React.useState({})

    const handleChange = (event) => {

        const name = event.target.name;
        const valor = event.target.value
        
        setActivityData({
            ...activityData, [name]: valor,
        })
    }

    React.useEffect(() => { // se usa el useEffect por una cuestión de asincronia , es decir, xq si metes todo en handlechange se valida más rapido el error que lo que se actualiza el estado, en cambio, con Useeffect haces que la validación suceda luego de actualizarse el estado, como lo indica en el 2do argumento de useeffect (igualmente en el CP no va a pasar aclaro)
        if(activityData.name !== "" || activityData.dificultad !== "" || activityData.duracion !== "" || activityData.temporada !== "") {
        const userValidated = validation(activityData)
        setError(userValidated)
        }   
    }, [activityData])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/activities",activityData)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}> 

        <label htmlFor="">Nombre</label>
        <input type="text" name="name" value={activityData.name} onChange={handleChange}/>
        {error.name && <p style={{color: "red"}}>{error.name}</p>}
        
        <label htmlFor="">Dificultad</label>
        <input type="text" name="dificultad" value={activityData.dificultad} onChange={handleChange}/>
        {error.dificult && <p style={{color: "red"}}>{error.dificult}</p>}

        <label htmlFor="">Duración</label>
        <input type="text" name="duracion" value={activityData.duracion} onChange={handleChange}/>
        {error.duration && <p style={{color: "red"}}>{error.duration}</p>}

        <label htmlFor="">Temporada</label>
        <input type="text" name="temporada" value={activityData.temporada} onChange={handleChange}/>
        {error.season && <p style={{color: "red"}}>{error.season}</p>}

        <label htmlFor="">Paises</label>
        <input type="text" name="countries" value={activityData.countries} onChange={handleChange}/>
        
        <button type="submit" >AGREGAR</button>

        </form>
    )
}

export default Form

/*Nombre.
Dificultad.
Duración.
Temporada.
Posibilidad de seleccionar/agregar varios países en simultáneo.
Botón para crear la actividad turística. */