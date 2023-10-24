const createActivity = async (req, res) => {
    const {name, paises} = req.body
    res.send(`voy a crear la actividad ${name} para los paises ${paises}`)
}

module.exports = {createActivity}