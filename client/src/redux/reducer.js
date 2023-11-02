import { FILTER_ACTIVITY, GET_COUNTRIES, ORDER_NAME, ORDER_POPULATION, FILTER_CONTINENT } from "./actionType"

const initialState = {
    countries: [],
    filteredCountries: [],
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_COUNTRIES:
            return {...state, countries: action.payload, filteredCountries: action.payload }

        case ORDER_NAME: 
        const countriesOrderByName = action.payload === "A" ? [...state.countries].sort((a, b) => a.name.localeCompare(b.name)) 
        : [...state.countries].sort((a, b) => b.name.localeCompare(a.name))
            
            return {
                ...state,
                countries: countriesOrderByName 
            }
            
        case ORDER_POPULATION:
        const countriesOrderByPopulation = action.payload === "A" ? [...state.countries].sort((a, b) => b.poblacion - a.poblacion) 
        : [...state.countries].sort((a, b) => a.poblacion - b.poblacion)
        
            return {
                ...state,
                countries: countriesOrderByPopulation
            }

        case FILTER_CONTINENT:
            
        const filteredCountriesByContinent = [...state.countries].filter((countrie) => countrie.continente === action.payload)
            console.log(filteredCountriesByContinent)

            return {
                ...state,
                filteredCountries: filteredCountriesByContinent,
            }
            

        default:
            return {...state}
    }
}

export default rootReducer