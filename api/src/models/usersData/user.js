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
    firstname: {
      type: DataTypes.STRING
    },
    middle_initial:{
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    available: {
      type: DataTypes.STRING
    },
    birthday:{
      type: DataTypes.STRING
    },
    first_users:{
      type:DataTypes.BOOLEAN
    },
    is_admin:{
      type:DataTypes.BOOLEAN
    },
    hire_date:{
      type:DataTypes.STRING
    },

  },{
    timestamps: false
  });

  

  return User;
}