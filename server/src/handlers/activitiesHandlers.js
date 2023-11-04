const {Activity, Country} = require("../db")

const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: [{model: Country}],
        })
        return res.status(200).json(activities);
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {getAllActivities}