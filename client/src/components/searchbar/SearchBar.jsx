import React from "react"
import style from "./SearchBar.module.css"
import { useDispatch } from "react-redux"
import { searchCountrie } from "../../redux/actions"


function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = React.useState()

    const handleChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        dispatch(searchCountrie(name))
    }

    return (
        
        <div>
            
        <input
        className={style.searchinput}
        onChange={handleChange}
        type="search"
        value={name}
        />
        <button onClick={()=> handleSubmit(name)}>BUSCAR</button>
        
        </div> 
        
    )
}

export default SearchBar