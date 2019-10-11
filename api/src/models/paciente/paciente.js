
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
    apellido: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    fechanacimiento: {
      type: DataTypes.DATE
    },
    estadocivil: {
      type: DataTypes.STRING
    },
    nacionalidad: {
      type: DataTypes.STRING
    },
    domicilio: {
      type: DataTypes.STRING
    },
    ocupacion: {
      type: DataTypes.STRING
    }

  },{
    timestamps: false
  });

  Paciente.associate = function(model){
    Paciente.hasOne(model.Historial);
    Paciente.hasOne(model.PacientesXHabitacion);
    Paciente.hasOne(model.MedicinaXPaciente);
}

  return Paciente;
}