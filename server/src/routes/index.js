/*controllers */
const{getAllCountries} = require("../handlers/countriesHandlers")
const{getCountryById} = require("../handlers/countriesHandlers")
const{createActivity} = require("../controllers/activityControllers")
const{getAllActivities} = require("../handlers/activitiesHandlers")

/*express config */
const { Router } = require("express");
const router = Router();

/*routes*/
router.get("/countries", getAllCountries) //incluir por query

router.get("/countries/:id", getCountryById)

router.post("/activities", createActivity)

router.get("/activities", getAllActivities)

module.exports = router;
