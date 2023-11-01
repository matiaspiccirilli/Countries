import axios from "axios"
import GET_COUNTRIES from "./actionType"



export const getCountries = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries")
        const countries = apiData.data;
        dispatch({ type: GET_COUNTRIES, payload: countries})
    }
}