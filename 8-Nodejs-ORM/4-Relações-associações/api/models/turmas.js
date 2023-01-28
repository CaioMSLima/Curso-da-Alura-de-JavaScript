'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       //Então vamos colar A.hasMany(B) .A vira Turmas, 
      //porque é o modelo do qual estamos falando, 
      //e ele tem vários, pertence a vários 
      //ou faz parte de vários do modelo-alvo, da tabela-alvo
      //estabelecemos uma relação entre “Turmas e MAtriculas ”
      Turmas.hasMany(models.Matriculas, {
        foreignKey: "turma_id"
      })
      //vamos agora inserir o “pertence a”
      Turmas.belongsTo(models.Pessoas ,{
        foreignKey: "docente_id"
      })
      Turmas.belongsTo(models.Niveis,{
        foreignKey: "nivel_id"
      })

    }
  }
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};