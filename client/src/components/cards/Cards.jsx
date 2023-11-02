import Card from "../card/Card"
import style from "./Cards.module.css"
import React from "react"
import axios from "axios"
import {useSelector} from "react-redux"
 

const Cards = () => {

    const paises = useSelector(state => state.countries)

    return (
        <div className={style}>
        {paises.map(countrie=>{
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