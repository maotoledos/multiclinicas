
export default (sequelize, DataTypes) => {
  var Historial = sequelize.define('historial', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    nombre:{
      type:DataTypes.STRING
    },
    examen:{
      type:DataTypes.STRING
    },
    diagnostico:{
      type:DataTypes.STRING
    },
    fecha:{
      type:DataTypes.STRING
    },   


  },{
    timestamps: false
  });

  return Historial;
}