const {Activity} = require("../db");
const {Country} = require("../db")

const createNewActivity = async (name, dificultad, duracion, temporada, countries) => { 
    const nuevaActividad = await Activity.create({name, dificultad, duracion, temporada})

    const countriespost = await Country.findAll({
        where: {name: countries},
    })

    await nuevaActividad.addCountry(countriespost)

    return nuevaActividad

    }


    const createActivity = async (req, res) => {
        try {
        const { name, dificultad, duracion, temporada, countries} = req.body 
        const newActivity = await createNewActivity( name, dificultad, duracion, temporada, countries) 
        res.status(201).json(newActivity)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

module.exports = {createNewActivity, createActivity}