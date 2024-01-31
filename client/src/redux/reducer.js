import { FILTER_ACTIVITY, GET_COUNTRIES, ORDER_NAME, ORDER_POPULATION, FILTER_CONTINENT, PAGINATION, SEARCH_COUNTRY, GET_ACTIVITIES, CHANGEPAGINATION } from "./actionType"
import { orderName } from "./actions";

const initialState = {
    countries: [],
    activities: [],
    allCountries: [], //backup
    currentPage: 0,
    countriesFiltered: [],
    filter: false,
    ordername: false,
    orderpopu: false,
    filtercon: false,
    filteract: false
}

const rootReducer = (state = initialState, action) => {
    const ITEM_PER_PAGE = 10;
    switch(action.type) {

        case GET_COUNTRIES:
            return {
                    ...state, 
                    countries: [...action.payload].splice(0, ITEM_PER_PAGE),
                    allCountries: action.payload,
                    filter: false,
                    ordername: false,
                    orderpopu: false,
                    filteract: false,
                    filtercon: false,
                    countriesFiltered: [],
                    currentPage: 0,
                    }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case SEARCH_COUNTRY:

            return{
                ...state,
                countries: [...action.payload].splice(0, ITEM_PER_PAGE),
                filter: true,
                ordername: false,
                orderpopu: false,
                filteract: false,
                filtercon: false,
                countriesFiltered: action.payload,
            }    
        

        case ORDER_NAME:

        if(state.countriesFiltered.length === 0) {
        state.countriesFiltered = action.payload === "A" ? [...state.allCountries].sort((a, b) => a.name.localeCompare(b.name)) 
        : [...state.allCountries].sort((a, b) => b.name.localeCompare(a.name))
        } 
        else if (state.countriesFiltered.length > 0) {
        state.countriesFiltered = action.payload === "A" ? [...state.countriesFiltered].sort((a, b) => a.name.localeCompare(b.name)) 
        : [...state.countriesFiltered].sort((a, b) => b.name.localeCompare(a.name))    
        }
        
            return {
                ...state,
                ordername: true,
                filter: false,
                orderpopu:false,
                filteract: false,
                filtercon: false,
                currentPage:0,
                countries: [...state.countriesFiltered].splice(0, ITEM_PER_PAGE),
            }
            
        case ORDER_POPULATION:

        if(state.countriesFiltered.length === 0) {
        state.countriesFiltered = action.payload === "A" ? [...state.allCountries].sort((a, b) => b.poblacion - a.poblacion) 
        : [...state.allCountries].sort((a, b) => a.poblacion - b.poblacion)
        } 
        else if (state.countriesFiltered.length > 0) {
        state.countriesFiltered = action.payload === "A" ? [...state.countriesFiltered].sort((a, b) => b.poblacion - a.poblacion) 
        : [...state.countriesFiltered].sort((a, b) => a.poblacion - b.poblacion)   
        }

            return {
                ...state,
                orderpopu: true,
                filter: false,
                ordername: false,
                filteract: false,
                filtercon: false,
                currentPage: 0,
                countries: [...state.countriesFiltered].splice(0, ITEM_PER_PAGE),
            }

        case FILTER_CONTINENT:

        if(state.filter || state.filteract || state.ordername || state.orderpopu) {
            state.countriesFiltered = [...state.countriesFiltered].filter((countrie) => countrie.continente === action.payload)
            return {
                ...state,
                countries: [...state.countriesFiltered].splice(0, ITEM_PER_PAGE),}
            }
          
        state.countriesFiltered = [...state.allCountries].filter((countrie) => countrie.continente === action.payload)
            return {
                ...state,
                countries: [...state.countriesFiltered].splice(0, ITEM_PER_PAGE),
                filtercon: true,
                orderpopu: false,
                filter: false,
                ordername: false,
                filteract: false,
                currentPage: 0
            }


        case FILTER_ACTIVITY:

        if(state.filter || state.filtercon || state.ordername || state.orderpopu) {

            state.countriesFiltered = state.countriesFiltered.filter((country) => (
                country.Activities && country.Activities.some(activity => activity.name === action.payload)))
            
            return {
                ...state,
                countries: [...state.countriesFiltered].splice(0, ITEM_PER_PAGE),}
            }
        
        state.countriesFiltered = state.allCountries.filter((country) => (
            country.Activities && country.Activities.some(activity => activity.name === action.payload)))
        
            return {
                ...state,
                countries: [...state.countriesFiltered].splice(0, ITEM_PER_PAGE),
                filteract: true,
                filtercon: false,
                orderpopu: false,
                filter: false,
                ordername: false,
                currentPage: 0
            }

        /*case PAGINATION: // PAGINADO OBSOLETO
            
                const next_page = state.currentPage + 1;
                const prev_page = state.currentPage - 1;
                const firstindex = action.payload === "next" ? next_page*ITEM_PER_PAGE : prev_page*ITEM_PER_PAGE
                
                if(action.payload === "next" && firstindex >= state.allCountries.length) return state   
                if(action.payload === "prev" && prev_page <0 ) return state 
                
                if(state.filter || state.ordername || state.orderpopu || state.filteract || state.filtercon){

                    const next_page = state.currentPage + 1;
                    const prev_page = state.currentPage - 1;
                    const firstindex = action.payload === "next" ? next_page*ITEM_PER_PAGE : prev_page*ITEM_PER_PAGE


                    if(action.payload === "next" && firstindex >= state.countriesFiltered.length) return state   
                    if(action.payload === "prev" && prev_page <0 ) return state 

                    return {
                        ...state,
                        countries: [...state.countriesFiltered].splice(firstindex, ITEM_PER_PAGE),
                        currentPage: action.payload === "next" ? next_page : prev_page
                    }
                }
    
                return {
                    ...state,
                    countries: [...state.allCountries].splice(firstindex, ITEM_PER_PAGE),
                    currentPage: action.payload === "next" ? next_page : prev_page
                }*/

                case CHANGEPAGINATION:
                
                if(state.filter || state.ordername || state.orderpopu || state.filteract || state.filtercon){

                    return {
                        ...state,
                        countries: [...state.countriesFiltered].splice(action.payload - 1, ITEM_PER_PAGE),
                        currentPage: action.payload - 1
                    }
                }
    
                return {
                    ...state,
                    countries: [...state.allCountries].splice(action.payload - 1, ITEM_PER_PAGE),
                    currentPage: action.payload - 1
                }        

        default:
            return {...state}
    }
}

export default rootReducer