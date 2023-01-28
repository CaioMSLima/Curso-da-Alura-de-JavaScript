'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Então vamos colar A.hasMany(B) .A vira Niveis, 
      //porque é o modelo do qual estamos falando, 
      //e ele tem vários, pertence a vários 
      //ou faz parte de vários do modelo-alvo, da tabela-alvo
      //estabelecemos uma relação entre “Niveis e Turma”
      Niveis.hasMany(models.Turmas, {
        foreignKey: "nivel_id"
      })
    }
  }
  Niveis.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
  });
  return Niveis;
};