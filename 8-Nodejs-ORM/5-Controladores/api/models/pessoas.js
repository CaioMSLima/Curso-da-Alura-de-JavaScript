'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //Então vamos colar A.hasMany(B) .A vira Pessoas, 
      //porque é o modelo do qual estamos falando, 
      //e ele tem vários, pertence a vários 
      //ou faz parte de vários do modelo-alvo, da tabela-alvo
      //estabelecemos uma relação entre “Pessoas e Turma”, e, “Pessoas e Matrículas”
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id"
      })
      Pessoas.hasMany(models.Matriculas,  {
        foreignKey: "estudante_id"
      })

    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};


