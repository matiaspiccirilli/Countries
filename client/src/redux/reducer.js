import { FILTER_ACTIVITY, GET_COUNTRIES, ORDER_NAME, ORDER_POPULATION, FILTER_CONTINENT, PAGINATION, SEARCH_COUNTRY, GET_ACTIVITIES } from "./actionType"

const initialState = {
    countries: [],
    activities: [],
    allCountries: [], //backup
    currentPage: 0,
    countriesFiltered: [],
    filter: false,
    countriesorname: [],
    ordername: false,
    countriesorpopu: [],
    orderpopu: false,
    filterconti: [],
    filtercon: false,
    filteractivi: [],
    filteract: false
}


const rootReducer = (state = initialState, action) => {
    const ITEM_PER_PAGE = 10;
    switch(action.type) {

        case GET_COUNTRIES:
            return {
                    ...state, 
                    countries: [...action.payload].splice(0, ITEM_PER_PAGE),
                    allCountries: action.payload }

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
                countriesFiltered: action.payload,
            }    
        

        case ORDER_NAME: 
        state.countriesorname = action.payload === "A" ? [...state.allCountries].sort((a, b) => a.name.localeCompare(b.name)) 
        : [...state.allCountries].sort((a, b) => b.name.localeCompare(a.name))
        
        console.log(state.countriesorname)
            return {
                ...state,
                ordername: true,
                filter: false,
                countries: [...state.countriesorname].splice(0, ITEM_PER_PAGE),
                
            }
            
        case ORDER_POPULATION:
        state.countriesorpopu = action.payload === "A" ? [...state.allCountries].sort((a, b) => b.poblacion - a.poblacion) 
        : [...state.allCountries].sort((a, b) => a.poblacion - b.poblacion)
        
            return {
                ...state,
                orderpopu: true,
                countries: [...state.countriesorpopu].splice(0, ITEM_PER_PAGE),
            }

        case FILTER_CONTINENT:
            
        state.filterconti = [...state.allCountries].filter((countrie) => countrie.continente === action.payload)
            

            return {
                ...state,
                countries: [...state.filterconti].splice(0, ITEM_PER_PAGE),
                filtercon: true,
            }

        case FILTER_ACTIVITY:
        
        state.filteractivi = state.allCountries.filter((country) => (
            country.Activities && country.Activities.some(activity => activity.name === action.payload)))
        
            return {
                ...state,
                countries: [...state.filteractivi].splice(0, ITEM_PER_PAGE),
                filteract: true,
            }

        case PAGINATION:
            
                const next_page = state.currentPage + 1;
                const prev_page = state.currentPage - 1;
                const firstindex = action.payload === "next" ? next_page*ITEM_PER_PAGE : prev_page*ITEM_PER_PAGE
                
                if(action.payload === "next" && firstindex >= state.allCountries.length) return state   
                if(action.payload === "prev" && prev_page <0 ) return state 
                
                if(state.filter){

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

                

                else if(state.ordername){
                    
                    const next_page = state.currentPage + 1;
                    const prev_page = state.currentPage - 1;
                    const firstindex = action.payload === "next" ? next_page*ITEM_PER_PAGE : prev_page*ITEM_PER_PAGE
                    
                    if(action.payload === "next" && firstindex >= state.countriesorname.length) return state   
                    if(action.payload === "prev" && prev_page <0 ) return state 
                    
                    return {
                        ...state,
                        countries: [...state.countriesorname].splice(firstindex, ITEM_PER_PAGE ),
                        currentPage: action.payload === "next" ? next_page : prev_page
                    }
                }

                else if(state.orderpopu){

                    if(action.payload === "next" && firstindex >= state.countriesorpopu.length) return state   
                    if(action.payload === "prev" && prev_page <0 ) return state 

                    return {
                        ...state,
                        countries: [...state.countriesorpopu].splice(firstindex, ITEM_PER_PAGE),
                        currentPage: action.payload === "next" ? next_page : prev_page
                    } 
                }

                else if(state.filtercon){

                    if(action.payload === "next" && firstindex >= state.filterconti.length) return state   
                    if(action.payload === "prev" && prev_page <0 ) return state 

                    return {
                        ...state,
                        countries: [...state.filterconti].splice(firstindex, ITEM_PER_PAGE),
                        currentPage: action.payload === "next" ? next_page : prev_page
                    }
                }
    
                return {
                    ...state,
                    countries: [...state.allCountries].splice(firstindex, ITEM_PER_PAGE),
                    currentPage: action.payload === "next" ? next_page : prev_page
                }

        default:
            return {...state}
    }
}

export default rootReducer