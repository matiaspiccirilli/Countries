import { FILTER_ACTIVITY, GET_COUNTRIES, ORDER_NAME, ORDER_POPULATION, FILTER_CONTINENT, PAGINATION, SEARCH_COUNTRY } from "./actionType"

const initialState = {
    countries: [],
    allCountries: [], //backup
    currentPage: 0
}


const rootReducer = (state = initialState, action) => {
    const ITEM_PER_PAGE = 10;
    switch(action.type) {

        case GET_COUNTRIES:
            return {
                    ...state, 
                    countries: [...action.payload].splice(0, ITEM_PER_PAGE),
                    allCountries: action.payload }

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
            
        const filteredCountriesByContinent = [...state.allCountries].filter((countrie) => countrie.continente === action.payload)
            

            return {
                ...state,
                countries: filteredCountriesByContinent.splice(0, ITEM_PER_PAGE),
            }
         
        case PAGINATION:
                const next_page = state.currentPage + 1;
                const prev_page = state.currentPage - 1;
                const firstindex = action.payload === "next" ? next_page*ITEM_PER_PAGE : prev_page*ITEM_PER_PAGE
    
                if(action.payload === "next" && firstindex >= state.allCountries.length) return state   
                if(action.payload === "prev" && prev_page <0 ) return state 
    
                return {
                    ...state,
                    countries: [...state.allCountries].splice(firstindex, ITEM_PER_PAGE),
                    currentPage: action.payload === "next" ? next_page : prev_page
                }
                
        case SEARCH_COUNTRY:
                return{
                    ...state,
                    countries: [...action.payload].splice(0, ITEM_PER_PAGE)
                }

        default:
            return {...state}
    }
}

export default rootReducer