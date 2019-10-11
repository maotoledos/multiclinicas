
export default (sequelize, DataTypes) => {
  var Inventario = sequelize.define('inventario', {
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
    cantidad:{
      type:DataTypes.DOUBLE
    },
    lote:{
      type:DataTypes.STRING
    }
  },{
    timestamps: false
  });

  return Inventario;
}