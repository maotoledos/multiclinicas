export default (sequelize, DataTypes) => {
    var Medicina = sequelize.define('medicina', {
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
      marca:{
        type:DataTypes.STRING
      },
      unidades:{
          type:DataTypes.INTEGER
      }
  
    },{
      timestamps: false
    });
                            //OJO:La creacion de FK es de OTRAS tablas.
    Medicina.associate = function(model){         
        Medicina.hasOne(model.MedicinaXPaciente);
        Medicina.hasOne(model.Inventario);
    }
    return Medicina;
  }
