/*controllers */
const{getAllCountries} = require("../controllers/getAllCountries")
const{getCountryById} = require("../controllers/getCountryById")
const{createActivity} = require("../controllers/createActivity")
const{getAllActivities} = require("../controllers/getAllActivities")

/*express config */
const { Router } = require("express");
const router = Router();

/*routes*/
router.get("/countries", getAllCountries) //incluir por query

router.get("/countries/:id", getCountryById)

router.post("/activities", createActivity)

router.get("/activities", getAllActivities)

module.exports = router;
