export default (sequelize, DataTypes) => {
  var Habitacion = sequelize.define('habitacion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING
    },

  }, {
    timestamps: false
  });


  Habitacion.associate = function (model) {
    Habitacion.hasOne(model.PacientesXHabitacion);
  }

  return Habitacion;
}