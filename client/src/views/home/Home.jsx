import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/Cards";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContinent, getCountries, changePage, getActivities, filterActivity, changePagination } from "../../redux/actions";
import { orderName, orderPopulation } from "../../redux/actions";
import style from "./Home.module.css"
import { Link } from "react-router-dom"
import { Pagination } from "@mui/material";
import { Stack } from "@mui/material";


const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [])

    const actividades = useSelector(state=> state.activities)

    const currentPage = useSelector(state=> state.currentPage) + 1

    const sizePagination = useSelector(state=> state.countriesFiltered) 
    
    const finalSize = sizePagination.length === 0 ? 25 : Math.ceil(sizePagination.length/10)

    const [aux, setAux] = useState(false)

    const handleOrderByName = (event) => {
        dispatch(orderName(event.target.value));
        setAux(true)
    }
    
    const handleOrderByPopulation = (event) => {
        dispatch(orderPopulation(event.target.value))
        setAux(true)
    }

    const handleFilterByContinent = (event) => {
        dispatch(filterContinent(event.target.value))
    }

    const handleFilterByActivity = (event) => {
        dispatch(filterActivity(event.target.value))
    }

    const pagination = (event) => {
        dispatch(changePage(event.target.name))
    }

    const [resetSearch, setResetSearch] = useState(false);

    const reset = (event) => {
        dispatch(getCountries(event.target.name))
        const selectElements = document.querySelectorAll(".select-container select");
        selectElements.forEach((select) => {
        select.value = "";
        })
        setResetSearch(true)
    }

    const onchangePagination = (event, page) => {
        dispatch(changePagination(page))
    }

    return (
        <div className={style.fondo}>

        <div className={style.postfon}></div>

        <div className={style.orderfilter}>
            <div className="select-container">
            <label className={style.label}>FILTRAR POR CONTINENTE</label>
            <select className={style.customselect} name="FiltroByContinent" onChange={handleFilterByContinent}>
                <option value="">Seleccionar Continente</option>
                <option value="Europe">Europa</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="South America">America del Sur</option>
                <option value="North America">America del Norte</option>
                <option value="Antarctica">Antartida</option>
            </select>
            </div>
            <div className="select-container">
            <label className={style.label}>FILTRAR POR ACTIVIDADES</label>
            <select className={style.customselect} name="FiltroByActivities" onChange={handleFilterByActivity}>
            <option value="">Seleccionar Actividades</option>
            {actividades.map(a => <option key={a.name} value={a.name}>{a.name}</option>)}
            </select>
            </div>

            <div className="select-container">
            <label className={style.label}>ORDENAR POR NOMBRE</label>
            <select className={style.customselect} name="OrderByName" onChange={handleOrderByName}>
                <option value="">Ordenamiento por Nombre</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            </div>

            <div className="select-container">
            <label className={style.label}>ORDENAR POR POBLACION</label>
            <select className={style.customselect} name="OrderByPopulation" onChange={handleOrderByPopulation}>
                <option value="">Ordenamiento por Población</option>
                <option value="A">Mayor</option>
                <option value="D">Menor</option>
            </select>
            </div>
        </div>

        <div className={style.separate}></div>

        <div className={style.sectiontwo}>
        <button onClick={reset} name="reset">Reset</button>   
            
            <div>
            <Stack spacing={2}>
            <Pagination count={finalSize} color="primary" page={currentPage} onChange={onchangePagination} />
            </Stack>         
            </div>

            <SearchBar 
            className={style.search}
            resetSearch={resetSearch} setResetSearch={setResetSearch}
             />

            <Link to={"/form"}>
            <button>Agregar Actividad</button>
            </Link>
            
        </div>
            
            <Cards/> 

    </div>
    )
}

export default Home
