
export default (sequelize, DataTypes) => {
  var Sucursales = sequelize.define('sucursales', {
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

  Sucursales.associate = function(model){
    Sucursales.hasOne(model.User);
    Sucursales.hasOne(model.Inventario)
  }


  return Sucursales;
}