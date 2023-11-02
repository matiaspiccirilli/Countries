import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/Cards";
import Card from "../../components/card/Card";
import axios from "axios"
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterContinent, getCountries } from "../../redux/actions";
import { orderName, orderPopulation } from "../../redux/actions";


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

            <select name="FiltroByContinent" onChange={handleFilterByContinent}>
                <option value="Europe">Europa</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="South America">America del Sur</option>
                <option value="North America">America del Norte</option>
                <option value="Antarctica">Antartida</option>
            </select>

            <select name="FiltroByActivities">
                <option value=""></option>
                <option value=""></option>
            </select>

            <select name="OrderByName" onChange={handleOrderByName}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select name="OrderByPopulation" onChange={handleOrderByPopulation}>
                <option value="A">Mayor</option>
                <option value="D">Menor</option>
            </select>

            <SearchBar onSearch={onSearch}/>
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