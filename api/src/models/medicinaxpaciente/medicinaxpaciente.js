export default (sequelize, DataTypes) => {
    var MedicinaXPaciente = sequelize.define('medicinaxpaciente', {
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
      dosis:{
        type:DataTypes.DOUBLE
      },
  
    },{
      timestamps: false
    });
    
    //FK MEDICINA
    //FK PACIENTE
    return MedicinaXPaciente;
  }
