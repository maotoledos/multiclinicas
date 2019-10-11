export default (sequelize, DataTypes) => {
    var TipoUsuario = sequelize.define('tipousuario', {
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
  
    TipoUsuario.associate = function(model){//OJO: Creacion de FK de OTRAS tablas.
      TipoUsuario.hasOne(model.User);
    }
  
  
    return TipoUsuario;
  }