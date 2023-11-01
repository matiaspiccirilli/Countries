import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/Cards";
import axios from "axios"
import React from "react";


const Home = () => {

    const [countries, setCountries] = React.useState()

    const onSearch = async (name) => {
        try {
            const {data} = await axios("http://localhost:3001/countries")

            if(data.name) {
                setCountries((oldCountries) => [...oldCountries, data])
            }
        } catch(error) {
            alert("no hay paises con ese nombre")
        }
    }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <Cards/> 
        </div>
    )
}

export default Home