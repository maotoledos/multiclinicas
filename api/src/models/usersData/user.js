// user
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
    tipo:{
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
    first_users:{
      type:DataTypes.BOOLEAN
    },
    
  },{
    timestamps: false
  });



  User.associate = function(model){
    User.hasOne(model.Historial);
} 
  return User;
}