import Card from "../card/Card"
import style from "./Cards.module.css"

//const countries = useSelector(state=>state.countries)

const countries = [
    {img:"braz", name:"brasil!", continent:"sudaca"},
    {img:"ale", name:"germany", continent:"europex"},
    {img:"argentina", name:"messi", continent:"America"}
]

const Cards = () => {
    return (
        <div className={style}>
        {countries.map(countrie=>{
            return <Card
            img={countrie.img}
            name={countrie.name}
            continent={countrie.continent}
            />
        })}

        </div>
    )
}

export default Cards