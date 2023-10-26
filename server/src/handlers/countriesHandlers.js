const api = require("../../api/db.json")

const getAllCountries = async (req, res) => {

    try {

        const { name } = req.query;
        if (!name) {
            return res.status(200).json(api);
        }

        // Buscar el país por nombre en el conjunto de datos
        const country = api.countries.find((country) =>
            country.name.common.toLowerCase() === name.toLowerCase()
        );

        if (country) {
            return res.status(200).json(country);
        } else {
            return res.status(404).json({ error: "El pais solicitado no existe" });
        }

    }

    catch (error) {
        return res.status(500).send(error.message)
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