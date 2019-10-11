export default (sequelize, DataTypes) => {
  var User = sequelize.define('users', {
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
    apellido: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    first_users: {
      type: DataTypes.BOOLEAN
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

  }, {
    timestamps: false
  });



  User.associate = function (model) {
    User.hasOne(model.Historial);
  }
  return User;
}