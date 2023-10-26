const {Activity} = require("../db");

const createNewActivity = async (id, name, dificultad, duracion, temporada, paises) => 
    await Activity.create({id, name, dificultad, duracion, temporada, paises})

    const createActivity = async (req, res) => {
        try {
        const {id, name, dificultad, duracion, temporada, paises} = req.body
        const newActivity = await createNewActivity(id, name, dificultad, duracion, temporada, paises)
        res.status(201).json(newActivity)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

module.exports = {createNewActivity, createActivity}