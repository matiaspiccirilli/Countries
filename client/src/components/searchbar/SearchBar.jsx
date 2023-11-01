import React from "react"


function SearchBar ({onSearch}) {
    const [name, setName] = React.useState()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        
        <div>
        <input
        onChange={handleChange}
        type="search"
        value={name}
        />
        <button onClick={()=> onSearch(name)}>Buscar</button>
        </div> 
        
    )
}

export default SearchBar