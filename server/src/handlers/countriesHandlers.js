const api = require("../../api/db.json")

const getAllCountries = async (req, res) => {

    try {

        const { name } = req.query;
        if (!name) {
            return res.status(200).json(api);
        }

       // Filtra los países cuyos nombres contienen las letras proporcionadas en el parámetro 'name'
       const matchingCountries = api.countries.filter((country) =>
       country.name.common.toLowerCase().includes(name.toLowerCase())
        );

        if (matchingCountries.length > 0) {
       return res.status(200).json(matchingCountries);
         } else {
       return res.status(404).json({ error: "No se encontraron países que coincidan con la búsqueda." });
        }
        } catch (error) {
         return res.status(500).send(error.message);
        }
}

const getCountryById = async (req, res) => {

    try {

    const {id} = req.params;
    if (!id) {
        return res.status(200).json(api);
    }

    // Buscar el país por id
        const country = api.countries.find((country) =>
            country.cca3.toLowerCase() === id.toLowerCase()
        );

        if (country) {
            return res.status(200).json(country);
        } else {
            return res.status(404).json({ error: "El pais solicitado no existe" });
        }

    }
    catch(error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getAllCountries, getCountryById}