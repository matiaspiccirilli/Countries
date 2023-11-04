import React, { useEffect } from "react"
import validation from "./validation"
import style from "./Form.module.css"
import axios from "axios"
import {useSelector} from "react-redux"
import { getCountries } from "../../redux/actions"
import { useDispatch } from "react-redux"

function Form () {

    //ALMACENAMIENTO DE INFORMACION

    const dispatch = useDispatch()

    const paises = useSelector(state => state.allCountries)

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const [activityData, setActivityData] = React.useState({
        name:"",
        dificultad:"",
        duracion: "",
        temporada: "",
        countries: ""
    })

    const handleChange = (event) => {

        if(event.target.name === "countries") {

            const name = event.target.name;
            const valor = event.target.value
        
        setActivityData({
            ...activityData, [name]: [...activityData.countries, event.target.value],
        })

        } else {
            const name = event.target.name;
        const valor = event.target.value
        
        setActivityData({
            ...activityData, [name]: valor,
        })
        }

    }


    //CONTROLADOR DE ERRORES

    const [error, setError] = React.useState({})

    React.useEffect(() => { // se usa el useEffect por una cuestión de asincronia , es decir, xq si metes todo en handlechange se valida más rapido el error que lo que se actualiza el estado, en cambio, con Useeffect haces que la validación suceda luego de actualizarse el estado, como lo indica en el 2do argumento de useeffect (igualmente en el CP no va a pasar aclaro)
        if(activityData.name !== "" || activityData.dificultad !== "" || activityData.duracion !== "" || activityData.temporada !== "") {
        const userValidated = validation(activityData)
        setError(userValidated)
        }   
    }, [activityData])


    //CREAR ACTVIDAD

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/activities",activityData)
        .then(res=>{
                    alert("Actividad Creada con Exito!") 
                    setActivityData({
                        name: "",
                        dificultad: "",
                        duracion: "",
                        temporada: "",
                        countries: ""
                    });
                })
        .catch(err=>alert(err))
    }
    console.log(activityData)

    return (
        <form className={style.form} onSubmit={handleSubmit}> 

        <label htmlFor="">Nombre</label>
        <input type="text" name="name" value={activityData.name} onChange={handleChange}/>
        {error.name && <p style={{color: "red"}}>{error.name}</p>}
        
        <label htmlFor="">Dificultad</label>
        <input type="text" name="dificultad" value={activityData.dificultad} onChange={handleChange}/>
        {error.dificultad && <p style={{color: "red"}}>{error.dificultad}</p>}

        <label htmlFor="">Duración</label>
        <input type="text" name="duracion" value={activityData.duracion} onChange={handleChange}/>
        {error.duracion && <p style={{color: "red"}}>{error.duracion}</p>}

        <label htmlFor="">Temporada</label>
        <input type="text" name="temporada" value={activityData.temporada} onChange={handleChange}/>
        {error.temporada && <p style={{color: "red"}}>{error.temporada}</p>}

        <label htmlFor="">Paises</label>
        <select type="text" name="countries" value={activityData.countries} onChange={handleChange}>
            <option value="">Seleccionar Países</option>
            {paises.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
        </select>
        
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