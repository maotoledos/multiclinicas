
export default (sequelize, DataTypes) => {
  var Paciente = sequelize.define('paciente', {
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

  },{
    timestamps: false
  });

  Paciente.associate = function(model){
    Paciente.hasOne(model.Historial);
    Paciente.hasOne(model.PacientesXHabitacion);
}

  return Paciente;
}