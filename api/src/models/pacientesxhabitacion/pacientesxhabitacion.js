
export default (sequelize, DataTypes) => {
  var PacientesXHabitacion = sequelize.define('pacientesxhabitacion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    fecha:{
      type:DataTypes.STRING
    },

  },{
    timestamps: false
  });


  return PacientesXHabitacion;
}