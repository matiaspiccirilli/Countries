import React from "react"
import style from "./SearchBar.module.css"


function SearchBar ({onSearch}) {
    const [name, setName] = React.useState()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        
        <div>
        <input
        className={style.searchinput}
        onChange={handleChange}
        type="search"
        value={name}
        />
        <button className={style.searchbutton} onClick={()=> onSearch(name)}>Buscar</button>
        </div> 
        
    )
}

export default SearchBar