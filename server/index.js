const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const {Country} = require("./src/db")
const api = require("./api/db.json")
const PORT = process.env.PORT || 3003; // Para Deploy

//const PORT = 3001; // Para Local

conn.sync({ force: true }).then(() => {
server.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server listening on port ${PORT}`);
  const {countries} = api
  countries.map(async({cca3,name,flags,continents,capital,subregion, area, population})=>{await 
    
    Country.findOrCreate({
      where: {
        id: cca3,
      }, 
      defaults:{
        name: name.common,
        img: flags.png,
        continente: continents? continents[0]:'undefined',
        capital: capital ? capital[0]:'undefined' ,
        subregion:subregion,
        area: area,
        poblacion: population,
      }
      })
      
    })
  }) 

}).catch(error => console.error(error))
