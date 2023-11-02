import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/Cards";
import Card from "../../components/card/Card";
import axios from "axios"
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterContinent, getCountries } from "../../redux/actions";
import { orderName, orderPopulation } from "../../redux/actions";
import style from "./Home.module.css"


const Home = () => {

    const [countries, setCountries] = React.useState()
    const [searchedCountry, setSearchedCountry] = React.useState(null)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getCountries())
    }, [])

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

    const onSearch = async (name) => {
        try {
            const {data} = await axios("http://localhost:3001/countries")

            const filteredCountries = data.filter((country) =>
            country.name.toLowerCase().includes(name.toLowerCase())
        );

        if (filteredCountries.length > 0) {
            setSearchedCountry(filteredCountries[0]); // Tomar el primer país de la búsqueda
        } else {
            setSearchedCountry(null); // No se encontraron resultados
        }

        setCountries(filteredCountries);

        } catch(error) {
            alert("no hay paises con ese nombre")
        }
    }

    return (
        <div>

            <div class="select-container">
            <label>FILTRAR POR CONTINENTE</label>
            <select className={style.customselect} name="FiltroByContinent" onChange={handleFilterByContinent}>
                <option value="Europe">Europa</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="South America">America del Sur</option>
                <option value="North America">America del Norte</option>
                <option value="Antarctica">Antartida</option>
            </select>
            </div>

            <div class="select-container">
            <label>FILTRAR POR ACTIVIDADES</label>
            <select className={style.customselect} name="FiltroByActivities">
                <option value=""></option>
                <option value=""></option>
            </select>
            </div>

            <div class="select-container">
            <label>ORDENAR POR NOMBRE</label>
            <select className={style.customselect} name="OrderByName" onChange={handleOrderByName}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            </div>

            <div class="select-container">
            <label>ORDENAR POR POBLACION</label>
            <select className={style.customselect} name="OrderByPopulation" onChange={handleOrderByPopulation}>
                <option value="A">Mayor</option>
                <option value="D">Menor</option>
            </select>
            </div>

            <SearchBar className={style.search} onSearch={onSearch}/>
            <Card
            key={searchedCountry?.id}
            id={searchedCountry?.id}    
            img={searchedCountry?.img}
            name={searchedCountry?.name}
            continent={searchedCountry?.continente}/>
            <Cards/> 
        </div>
    )
}

export default Home