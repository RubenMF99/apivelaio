const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('peticion', {
    idpeticion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    peticion: {
      type: DataTypes.STRING(105),
      allowNull: false
    },
    user_iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'iduser'
      }
    }
  }, {
    sequelize,
    tableName: 'peticion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpeticion" },
        ]
      },
      {
        name: "fk_peticion_user_idx",
        using: "BTREE",
        fields: [
          { name: "user_iduser" },
        ]
      },
    ]
  });
};
