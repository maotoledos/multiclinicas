export default (sequelize, DataTypes) => {
    var TipoAtencion = sequelize.define('tipoatencion', {
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
    TipoAtencion.associate = function(model){         
      TipoAtencion.hasOne(model.Historial);
    }
    return TipoAtencion;
  }
