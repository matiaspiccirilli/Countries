import Card from "../card/Card"
import style from "./Cards.module.css"
import React from "react"
import axios from "axios"

//const countries = useSelector(state=>state.countries)

/*const countries = [
    {img:"braz", name:"brasil!", continent:"sudaca"},
    {img:"ale", name:"germany", continent:"europex"},
    {img:"argentina", name:"messi", continent:"America"}
]*/

const Cards = () => {

    const [countries, setCountries] = React.useState([])

    const getCountries = async () => {
        try{
            const apiData = await axios.get("http://localhost:3001/countries")
            const countriesData = apiData.data;
            setCountries(countriesData);
        } catch(error) {
            console.log("error al obtener paises", error)
        }
      }
    
    React.useEffect(() => {
        getCountries()
    }, [])

    return (
        <div className={style}>
        {countries.map(countrie=>{
            return <Card
            key={countrie.id}
            id={countrie.id}    
            img={countrie.img}
            name={countrie.name}
            continent={countrie.continente}
            />
        })}
        </div>
    )
}

export default Cards