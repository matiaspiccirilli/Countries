const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Activity', 
  { 
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"), // tienen que ir con "" p/ q corra el servidor
      allowNull: false
    },
    duracion: {
      type: DataTypes.STRING, //tipo number me deja de correr el servidor
    },
    temporada: {
      type: DataTypes.ENUM("Otoño", "Verano", "Primavera", "Invierno"),
      allowNull: false
    },
  }, {timestamps: false}
  );
};