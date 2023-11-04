import axios from "axios"
import {FILTER_CONTINENT, GET_COUNTRIES, ORDER_NAME, ORDER_POPULATION, FILTER_ACTIVITY, PAGINATION, SEARCH_COUNTRY, GET_ACTIVITIES} from "./actionType"



export const getCountries = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries")
        const countries = apiData.data;
        dispatch({ type: GET_COUNTRIES, payload: countries})
    }
}

export const getActivities = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3001/activities")
        const activities = apiData.data;
        dispatch({ type: GET_ACTIVITIES, payload: activities})
    }
}

export const orderName = (order) => {
    return {type: ORDER_NAME, payload: order}
}

export const orderPopulation = (order) => {
    return {type: ORDER_POPULATION, payload: order}
}

export const filterContinent = (continent) => {
    return {type: FILTER_CONTINENT, payload: continent}
}

export const changePage = (order) => {
    return {type: PAGINATION, payload: order} 
}

export const searchCountrie = (countrie) => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${countrie}`)
            dispatch(
                {type: SEARCH_COUNTRY,
                 payload: response.data}
            )
        } catch(error) {
            alert(error.response.data.error)
        }
    }
}

export const filterActivity = (activity) => {
    return {type: FILTER_ACTIVITY , payload: activity}
}
