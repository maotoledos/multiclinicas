export default (sequelize, DataTypes) => {
    var Expediente = sequelize.define('expediente', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      descripcion:{
        type:DataTypes.STRING
      },
  
    },{
      timestamps: false
    });

    Expediente.associate = function(model){         
      Expediente.hasOne(model.Historial);
    }
    return Expediente;
  }
