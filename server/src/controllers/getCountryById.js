const api = require("../../api/db.json")

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

module.exports = {getCountryById}