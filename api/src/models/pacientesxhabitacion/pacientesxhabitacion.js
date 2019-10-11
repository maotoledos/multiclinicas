
export default (sequelize, DataTypes) => {
  var PacientesXHabitacion = sequelize.define('pacientesxhabitacion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    fechaocupada:{
      type:DataTypes.DATE
    },
    fechadesocupada:{
      type:DataTypes.DATE
    },
  },{
    timestamps: false
  });


  return PacientesXHabitacion;
}