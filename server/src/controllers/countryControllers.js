/*const {Country} = require("../db")
const api = require("../../api/db.json")

const createNewCountry = async (id, name, img, continente, capital, subregion, area, poblacion) => //
await Country.create({id, name, img, continente, capital, subregion, area, poblacion}) //
 
const createCountry = async (req, res) => {
    try {

        const countriesData = api.countries

        for (const countryData of countriesData) {
            const {cca3, name, flag, continents, capital, subregion, area, population} = countryData

            const continentStr = continents ? continents.join(", ") : "";
            const capitalStr = capital ? capital.join(", ") : "";

            await createNewCountry(cca3, name.common, flag, continentStr, capitalStr, subregion, area, population)
        }

        res.status(200).json({message: "datos cargados exitosamente"})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createCountry, createNewCountry}*/